// declare the function
function speedDetector(speed) {
    
// declare the incrementation through the variable incrementBy
    
    const incrementBy = 5;
// declare license points
    
    let licensePoints = 0

// first conditional. When the speed is less than or equal to 70 it should return 'Ok.'
    
if (speed <= 70) {
        
    console.log("OK")

    // else if condition for speeds less than or equal to 130.
    
} else if (speed <= 130) {
            
        // declare pointsDecrement by taking the speed value above 70 and substracting by 70 then dividing the resultant value by 5.
            
        const pointsDecrement = Math.ceil((speed - 70) / incrementBy);
            
        // using the template literal to return the value of the pointsDecrement i.e points: 3
            
        console.log(`points: ${pointsDecrement}`);
   
    } else {
        
        // output for speeds beyond 130
        console.log("License suspended!");
    }

}


