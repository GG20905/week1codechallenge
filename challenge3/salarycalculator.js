const prompt=require("prompt-sync")({signin:true});
let basicSalary=prompt('Enter gross salary');//Prompt to input basic salary
basicSalary=parseInt(basicSalary)
let benefits=prompt('Enter benefits provided');//Prompt to input additional benefits provided to the user
benefits=parseInt(benefits);
let nssfPension=prompt('Enter Pensionable pay',);//Prompt to input users pensionable pay
nssfPension=parseInt(nssfPension);



function calculateNetSalary(){
    
   const grossSalary=basicSalary+benefits//Constant for gross salary
    function monthlyTaxRate(){
if (grossSalary<=24000){
return grossSalary*0.1
}
else if(grossSalary >24000 && grossSalary <= 32333){
return grossSalary*0.25
}
else if(grossSalary >32333 && grossSalary <=500000){
return grossSalary*0.30
}
else if(grossSalary >500000 && grossSalary <=800000){
    return grossSalary*0.325
}
else if(grossSalary >800000){
    return grossSalary*0.35
}
    }
    function nhifDeductions(){
        if(grossSalary<=5999){
            return 150
        }
         else if(grossSalary >5999 && grossSalary <=7999){
            return 300
        }
        else if(grossSalary >7999 && grossSalary <=11999){
            return 400
        }
        else if(grossSalary >11999 && grossSalary <= 14999){
            return 500
        }
        else if(grossSalary >14999 && grossSalary <= 19999){
            return 600
        
             
        }else if (grossSalary >24999 && grossSalary <= 29999){
             return 850
        }
        else if (grossSalary >29999 && grossSalary <= 34999){
            return 900
        }
        else if(grossSalary >34999 && grossSalary <= 39999){
            return 950
        }
        else if (grossSalary>39999 && grossSalary<= 44999){
            return 1000
        }
        else if(grossSalary>44999 && grossSalary <=49999){
            return 1100
        }
        else if (grossSalary >49999 && grossSalary <= 59999){
            return 1200
        }
        else if(grossSalary >59999 && grossSalary <= 69999){
            return 1300
        }
        else if(grossSalary >69999 && grossSalary <= 79999){
            return 1400
        }
        else if(grossSalary >79999 && grossSalary <= 89999){
            return 1500
        }
        else if(grossSalary >89999 && grossSalary <= 99999){
            return 1600
        }
        else if (grossSalary >= 100000){
            return 1700
        }

        else if(grossSalary >19999 && grossSalary <=24999){
            return 300
        }
        }
        function nssfDeductions(){//function to calculate nssf deductions based on pensionable pay
            if(pensionablePay <=7000){
                return pensionablePay*0.06
            }
            else if(pensionablePay >7000 && pensionablePay<= 36000){
                return pensionablePay*0.06
    }
    } 

    return calculateNetSalary=grossSalary-(monthlyTaxRate+nssfDeductions+nhifDeductions)//Calculations to obtain net salary


}

return calculateNetSalary=grossSalary-(monthlyTaxRate+nssfDeductions+nhifDeductions)//Calculations to obtain net salary


