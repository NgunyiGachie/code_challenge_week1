// define netSalary function
function netSalary(deductions, grossSalary) {
    
    // Prompt user to enter gross salary
    let userInput = prompt("Enter Gross Salary");

    // Check if user input is valid
    if (userInput === null || userInput === "") {
        return "Enter valid grossSalary";
    }

    // Parse user input into a float since I'm expecting some salaries to be decimals
    grossSalary = parseFloat(userInput);

    // Check if gross salary is valid
    if (isNaN(grossSalary)) {
        return "Please enter valid grossSalary";
    }

    // Initialize deductions if not provided
    deductions = typeof deductions === 'number' ? deductions : 0;

    // NHIF deduction rates
    const nhifRates = [
        
        { min: 0, max: 5999, deduction: 150 },
        
        { min: 6000, max: 7999, deduction: 300 },
        
        { min: 8000, max: 11999, deduction: 400 },
        
        { min: 12000, max: 14999, deduction: 500 },
        
        { min: 15000, max: 19999, deduction: 600 },
        
        { min: 20000, max: 24999, deduction: 750 },
        
        { min: 25000, max: 29999, deduction: 850 },
        
        { min: 30000, max: 34999, deduction: 900 },
        
        { min: 35000, max: 39999, deduction: 950 },
        
        { min: 40000, max: 44999, deduction: 1000 },
        
        { min: 45000, max: 49999, deduction: 1100 },
        
        { min: 50000, max: 59999, deduction: 1200 },
        
        { min: 60000, max: 69999, deduction: 1300 },
        
        { min: 70000, max: 79999, deduction: 1400 },
        
        { min: 80000, max: 89999, deduction: 1500 },
        
        { min: 90000, max: 99999, deduction: 1600 },
        
        { min: 100000, max: Infinity, deduction: 1700 }
    ];

    // Calculate NHIF deduction based on gross salary
    let nhifDeduction = 0;
    
    // loop to find the nhifRate corresponding to the grossSalary
    for (const rate of nhifRates) {
        
        if (grossSalary >= rate.min && grossSalary <= rate.max) {
            
            nhifDeduction = rate.deduction;
            
            break;
        }
    }

    // Calculate NSSF deduction based on gross salary
    let nssfDeduction = 0;
    
    if (grossSalary <= 7000) {
        
        nssfDeduction = grossSalary * 0.06;
    
    } else if (grossSalary <= 36000) {
        
        nssfDeduction = 36000 * 0.06;
    }

    // Calculate payee based on gross salary
    let payee = 0;
    
    if (grossSalary >= 24000) {
        
        payee = 24000 * 0.1;
    
    } else if (grossSalary > 24000 && grossSalary <= 32333) { 
        
        payee = grossSalary * 0.25;
    
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        
        payee = grossSalary * 0.3;
    
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        
        payee = grossSalary * 0.325;
    
    } else if (grossSalary > 800000) {
       
        payee = grossSalary * 0.35;
    }
    
    // Calculate total deductions
    const totalDeductions = deductions + payee + nhifDeduction + nssfDeduction;

    // Calculate net salary
    const netSalary = grossSalary - totalDeductions;

    return netSalary;
}
