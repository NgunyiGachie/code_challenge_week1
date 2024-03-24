// declare the function
function speedDetector(speed) {

// since the license is suspended after the points increment to 12, I assigned the target '130' as that's where the license suspension begins
    
const target = 130;
// declare the incrementation through the variable incrementBy
    
    const incrementBy = 5;
// declare license points
    
    const licensePoints = 0

// first conditional. When the speed is less than or equal to 70 it should return 'Ok.'
    
if (speed <= 70) {
        console.log("OK")
// else if condition for speeds greater than 70 but less than or equal to 130 (target).
    
} else if (speed > 70 && speed <= 130) {
        
    // beginning of the loop when speeds are less than or equal to 130
        
    while (speed <= target) {
            
        // declare pointsDecrement by taking the speed value above 70 and substracting by 70 then dividing the resultant value by 5.
            
        const pointsDecrement = Math.ceil((speed - 70) / incrementBy);
            
        // using the template literal to return the value of the pointsDecrement i.e points: 3
            
        console.log(`points: ${pointsDecrement}`);
           
        // incrementing the value of licensePoints with the value of pointsDecrement
           
        licensePoints += pointsDecrement;
        
        // incrementing the value of speed by 5
            
        speed += incrementBy;
    }
       // condition checks if licensePoints are equal or more than 12
    if (licensePoints >= 12) { 
        console.log("License Suspended");
    } else {
        // if licensePoints are less than 12, the license is not suspended
        console.log("OK");
    }
}
}
