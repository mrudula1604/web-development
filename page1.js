var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);
// initially we are setting to false 
var validName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validAddress1 = false;
var validCity = false;
var validState = false;
var validZipcode = false;
var validComment = false;

var drinkStr = "";

// regular expressions for name, email and phone
var regExName = /^[a-zA-Z]+$/;
var regLastName = /^[a-zA-Z]+$/;
var regExEmail = /([\w\.]+)@northeastern.edu/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExAddress1 = /^[a-zA-Z0-9\s,.'-]{3,}$/;
var regExCity = /^[a-zA-Z]+$/;
var regExState = /^[a-zA-Z]+$/;
var regexZipcode = /^\d{5}$/;
var regexComments = /.*/;

//values 
var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate)

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate)

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate)

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate)

var address1 = document.getElementById("streetAddress1");
address1.addEventListener("input", validate)

var city = document.getElementById("city");
city.addEventListener("input", validate)

var state = document.getElementById("state");
state.addEventListener("input", validate)

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate)

var comments = document.getElementById("comments");
comments.addEventListener("input", validate)

// write a function for validate
function validate(e){
    var value = e.target.value;
    var type = this.id; // we are getting ID of the field
    var em = "error_" + type;

    switch(type){
        case "firstName":
            if(!value.trim().match(regExName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validName = false;
                console.log("validname", validName)
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validName = true;
                console.log("validname", validName)
            }
            break;
        case "lastName":
            if(!value.trim().match(regExName)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validLastName = false;
                console.log("validlastname", validLastName)
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validLastName = true;
                console.log("validlastname", validLastName)
            }
            break;
        case "emailId":
            if(!value.trim().match(regExEmail)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validEmail = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validEmail = true;
            }
            break;
        case "phoneNumber":
            if(!value.trim().match(regExPhone)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validPhone = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validPhone = true;
            }
            break;
        case "streetAddress1":
            if(!value.trim() == ""){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validAddress1 = false;
            }else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validAddress1 = true;
            }
            break;
        case "city":
            if(!value.trim().match(regExCity)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validCity = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validCity = true;
            }
            break;
        case "state":
            if(!value.trim().match(regExState)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validState = false;
            }
            else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validState = true;
            }
            break;
        case "zipcode":
            if(!value.trim().match(regexZipcode)){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validZipcode = false;
            }else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validZipcode = true;
            }
            break;
        
        case "comments":
            if(value.trim()== ""){
                document.getElementById(em).style.display = "block";
                this.style.border = "2px solid red";
                validComment = false;
            }else{
                document.getElementById(em).style.display = "none";
                this.style.border = "";
                validComment = true;
            }
            break;                
    }

}

function validateDrink(value){
    var selecDrin = value.options[value.selectedIndex].text;
    document.getElementById('test').innerHTML = selecDrin + " (1$ extra)";
    if(selecDrin != "Choices"){
        document.getElementById('checkboxFit').style.visibility = "visible";
        document.getElementById('test').style.visibility = "visible";
        drinkString = selecDrin;
    }else{
        document.getElementById('checkboxFit').style.visibility = "hidden";
        document.getElementById('test').style.visibility = "hidden";
        drinkString = selecDrin
    }
}

function radioButtonValue(){
    var val = document.getElementsByName('title');
    for (var i = 0; i < val.length; i++) {
        if (val[i].checked){
            return val[i].value;
        }
    }
}

function checkbx(){
    var val = document.getElementsByName('source');
    const arr = [];
    for (var i = 0; i < val.length; i++) {
        if(val[i].checked){
            arr[i] = val[i].value;
        }
    }return arr;
}

function addAdditionalInfo(){
    var check = document.getElementById('Extra');
    if (check.checked){
        document.getElementById('additionalInfo').style.display = 'block';
    }else{
        document.getElementById('additionalInfo').style.display = 'none';
    }
}

// write a function submitted
function submitted(e){
    var check = document.getElementById('Extra');
    e.preventDefault();
    var title = radioButtonValue();
    const ar = checkbx();
    var strC = "";
    if(check.checked){
        strC.replace("", "Yes");
    }else{
        strC.replace("", "No");
    }
    var spanText = document.getElementById('test').innerText;
    console.log("validname", validName)
    if(validName && validLastName && validEmail && validPhone && validCity && validState && validZipcode && validComment && ar.length > 0){
        alert("Data entered succesfull"); 
        var data = {'Title':title,'FirstName':document.getElementById("firstName").value,'LastName':document.getElementById("lastName").value,'Email':document.getElementById("emailId").value, 'Phone':document.getElementById("phoneNumber").value, 'StreetAddress1':document.getElementById('streetAddress1').value, 'StreetAddress2':document.getElementById('streetAddress2').value,'City':document.getElementById("city").value, 'State':document.getElementById("state").value, 'Zipcode':document.getElementById("zipcode").value, 'Hear': ar, 'Food':spanText, 'AddiInfo':document.getElementById('Info').value, 'Comment':document.getElementById("comments").value};
        localStorage.setItem("object_name",JSON.stringify(data));
        document.getElementById("myForm").reset();
        window.location.href = "FeedbackComplete.html";
    }
    else{
        alert("Please enter valid details");
    }
} 