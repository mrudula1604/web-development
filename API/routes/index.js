const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const User= mongoose.model('employees');
const bcrypt = require('bcrypt');
const cors = require('cors');
router.use(cors());

// Get All Employees
router.get('/user/getAll', (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
            console.log(data);
           
        } else {
            console.log(err);
        }
    });
});

// Get specific user only

router.post('/user/get', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}, async (err, data) => {
        
        if(data) {
            const match = await bcrypt.compare(password, data.password);
            if (match){
                res.status(200).send({message: "User exists"});
                console.log(data);
            }else{
                res.status(401).send({message: "Invalid Password"})
                console.log(err);
            }
           
        } else {
            res.status(401).send({message: "User does not exist"});
            console.log(err);
        }
    });
});

router.post('/user/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = User.findOne({email: email});
  
    if (user) {
      // Compare the password in the request body with the stored password using bcrypt
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Passwords match, user is authenticated
        res.status(200).send({ message: 'User authenticated' });
      } else {
        // Passwords do not match, return an error response
        res.status(401).send({ error: 'Invalid email or password' });
      }
    } else {
      // User not found, return an error response
      res.status(401).send({ error: 'Invalid email or password' });
    }
  });

// Save Employee
router.post('/user/create', (req, res) => {
    console.log(req.body);

    
var user = new User();
        user.email= req.body.email;
        user.fullname= req.body.fullname;
        user.password= req.body.password;
       
    
    user.save((err, data) => {
        if(!err) {
            // res.send(data);
            let nameRegex =  /^[a-zA-Z]+$/;
            let mailRegex = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;
            
            if(mailRegex.test(data.email)&& nameRegex.test(data.fullname)){
            res.status(200).json({code: 200, message: 'Employee Added Successfully', addEmployee: data})
        }else{
            if(mailRegex.test(data.email)==false){
                res.status(500).json({code: 200, message: 'Not a valid email'}) 
            }
            else if(nameRegex.test(data.fullname)==false) {
                res.status(500).json({code: 200, message: 'Not a valid Name'}) 
            }
        }

        } else {
           console.log(err);
           console.log('did not add');
        }
    });
});





router.put('/user/edit/:email',async (req, res) => {
    const email= req.params.email;
    let nameRegex =  /^[a-zA-Z]+$/;
    try{
        await User.findOneAndUpdate({
            email: email,
        },
        {   
            
            fullname:req.body.fullname,
            password:req.body.password,
            
        }
        )
       
        res.status(202).json({email:email});
        console.log("Updated");
    

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
});









router.delete('/user/delete/:email', (req, res) => {
const filter = { email: req.params.email };
    User.findOneAndDelete(filter, (err, data) => {
        if (!err & data != null) {
            res.status(200).json({ code: 200, message: 'User deleted', deletedUser: data })
        } else if (data == null) {
            res.status(404).json({ code: 404, message: 'No User found with this E-mail' });
        }
        else if (err) {
            console.log(err);
        }
    });
});



module.exports = router;