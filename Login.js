$(document).ready(function(){
    console.log('hi');
$('#registration').submit(function(e){
    console.log('gg');
    e.preventDefault();
    let username =$('#username').val();
    let email =$('#email').val();
    let password =$('#password').val();
    let nameRegex =  /^[a-zA-Z]+$/;
    let mailRegex = /^[A-Za-z0-9._%+-]+@northeastern\.edu$/;;
    $("#error_firstname").hide();
    $("#error_emailId").hide();
    $("#error_password").hide();
    
    var validName = false;
    var validEmail = false;
    var ValidPassword=false;
    
    if(username.length == "" ){
        $("#error_firstname").show();
        $("#error_firstname").html("user can not be empty");
        validName = false;
    }
    else if (username.length < 3){

        $("#error_firstname").show();
        $("#error_firstname").html("Cannot be less than 3");
        validName = false;
    }
    
    else if(!nameRegex.test(username)){
          $("#error_firstname").show();
        $("#error_firstname").html("Only Alphabets");
        validName = false;
    }
    else{
        validName = true;

    }
    console.log(validName);

    
    if(email.length ==""){
        $("#error_emailId").show();
        $("#error_emailId").html("Email can not be empty");
        validEmail = false;
    }
    else if(!mailRegex.test(email)){
            $("#error_emailId").show();
            $("#error_emailId").html("Please check the format");
            validEmail= false;
        }
        else{
            validEmail = true;
    
        }
    
    if(password.length < 1){
        $("#error_password").show();
        $("#error_password").html("Password can not be empty");
        ValidPassword =false;
    }
    else if(password.length < 7){
            $("#error_password").show();
            $("#error_password").html("Password can not be less than 7 characters long");
            ValidPassword=false;
    }
    else{
        ValidPassword = true;

    }


    if(validEmail && validName && ValidPassword){
        $('#registration').trigger('reset');
        alert("Submitted");
        window.location.href="PartAcal.html?name=" + username;
    }



});
});