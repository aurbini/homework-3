 var password = ""
 var specialChars = "!@#$%^&*()"
 var numbers = "123456789";
 var alphabetLower = "abcdefghijklmnopqrstufwxyz";
 var alphabetUpper = alphabetLower.toUpperCase(); 
 
 
 
 function generatePassword() {

    var inputLength = prompt("How long do you want the password to be between 8-128 characters? "); 
    var generator = ""; 
    if (inputLength < 8 || inputLength > 128){
        prompt("Please reenter how many digits?")
    } else {

        var inputSpecial = confirm("Do you want special characters?"); 
        var inputNumbers = confirm("Do you want numbers?");
        var lowerCase = confirm("Do you want lower case letters?");
        var upperCase = confirm("Do you want upper case characers?");

        console.log(`${inputLength} + ${inputSpecial} + ${inputNumbers}+ ${lowerCase} + ${upperCase}`)

        if (inputSpecial){
            generator += specialChars;
        }
        
        if(inputNumbers){
            generator += numbers; 
        }
        
        if(lowerCase){
            generator += alphabetLower; 
        }
        
        if(upperCase){
            generator += alphabetUpper; 
        }
    }

    if( inputSpecial || inputNumbers || lowerCase || upperCase){
        var textBox = document.getElementById('textBox')
        
        for (var i = 0; i < inputLength; ++i) {
            password += generator.charAt(Math.floor(Math.random() * generator.length));
        }   
        
        textBox.value = password

        // document.getElementById("textBox").value = password; 
        alert(`Your new password is ${password}`)

        }else{
            alert("You must answer one of the questions true");
        }            

 }
 

