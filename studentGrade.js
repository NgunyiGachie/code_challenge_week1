// define studentGrade function
function studentGrade() {
    // define the prompt message the user will be asked when entering student marks
    const userInput = prompt("Please enter student marks!")
    // parse userInput into a string using parseInt. i.e the parseInt takes the string stosred in userInput, converts it to an integer and passes it to the constant variable "marks."
    const marks = parseInt(userInput)
    
    // if/else conditional
    if (marks >= 80 && marks <= 100) {
        // execute this code block if the marks are greater or equal to 80 but less than 100 as the marks need to be between 0 and 100
        return "A"; 
    }
    else if (marks >= 60 && marks < 80) {
        // execute this code block if the marks are greater or equal to 60 but less than 80
        return "B";
    }
    else if (marks >= 49 && marks < 60) {
        // execute this code block if the marks are greater or equal to 49 but less than 60
        return "C";
    }
    else if (marks >= 40 && marks < 49) {
        // execute this code block if the marks are greater of equal to 40 but less than 49
        return "D";
    }
    else if (marks < 40 && marks >= 0) {
        // execute this code block if the marks are less than 40 but greater than zero as the marks need to be between 0 and 100
        return "E";
    }
    
    else {
        // execute this code block if no marks are inputed
        return "Please input valid student marks!";
    }
    }
    
    // variable declaration
    const output = studentGrade();
    // provides the output once marks between 0 and 100 are keyed in.
    console.log(studentGrade(marks));
    
    
    
    