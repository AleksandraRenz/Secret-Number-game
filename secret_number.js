//Aleksandra Renz, Feb 2023

        

        //getting the computer generated number from 1 to 10
        const computer = Math.floor(Math.random() * 10) + 1;
        //displaying computer number in the console for debugging 
        console.log(computer);

        //declaring a flag variable
        let input = false;

       //while user input is not equal to computer number
        while (input!==computer) {

            //getting an input from the user. If user prompts a string it converts it to an integer
            input = parseInt(prompt("Guess a number between 1 and 10: ", ""));

            //validating input            
            if (isNaN(input)) {
                alert("Enter a number");
            }else if (input > 10){
                alert("Entered number is too high. Choose number between 1 and 10");
            }else if(input < 1){
                alert("Entered number is too low. Choose number between 1 and 10");
            }else{
           
                //alert displayed when computer's number is grater than user input 
                if (computer > input) {
                    alert(`You answered ${input}. The correct answer is higher`);
       
                //alert displayed when computer's number is lower than user input 
                } else if (computer < input) {
                alert (`You answered ${input}. The correct answer is lower`);

                } else {
                //terminating the loop when input is equal computer number
                input=true;
                break; }
            
            }
        }

        alert(`You answered ${input}. This is the correct answer!`);