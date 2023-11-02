var params = new window.URLSearchParams(window.location.search);
var user = params.get('name');
console.log(user);
$('#user').text(user);


myFunction = (v) => {
        var input1=$("#Digit1").val();
        var input2 = $('#Digit2').val(); 
        var ans = $('#ans').prop("readonly",true); 
        var ans=0;
        let numRegex = /^[1-9]\d*$/;
        let validintger1 = false;
        let validintger2 = true;
        $("#error_input1").hide();
        $("#error_input2").hide();
        //$("#cal").hide();
       

        if(!numRegex.test(input1) || !numRegex.test(input2)){
                $("#error_number").show();
                $("#error_number").html("Enter only numbers");
                console.log("Erooorr!!");
            }else if(input1.length=="" || input2.length==""){
                $("#error_number").show();
                $("#error_number").html("Input both number");
            }

      

        
        switch(v){
            case "add":         console.log("add");
                                ans = parseInt(input1)+parseInt(input2);
                                $('#ans').val(ans); break;
            case "subtract":    console.log("subtract");
                                ans = parseInt(input1)-parseInt(input2);
                                $('#ans').val(ans); break;
            case "multiply":    console.log("multiply");
                                ans = parseInt(input1)*parseInt(input2);
                                $('#ans').val(ans); break;
            case "divide":      console.log("divide");
                                ans = parseInt(input1)/parseInt(input2);
                                $('#ans').val(ans); break;
       
    }

}
   
