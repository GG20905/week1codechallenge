const basicSalary=50000;//assigned value for basic salary
const benefits=4000;//assigned value for benefits

function NetSalary(basicSalary,benefits){
    const NHIF=0.02;//constant for NHIF rates
    const Taxrate=0.03;//constant Tax rates
    const NSSF=0.06;//constant NSSF rates

    const grossSalary=basicSalary+benefits//constant to obtain gross salary
    const Tax=grossSalary*Taxrate;//constant to obtain tax
    const NHIFDeductions=grossSalary*NHIF//constant to obtain NHIF deductions
    const NSSFDeduction=grossSalary*NSSF//constant to obtain NSSF deductions


    const netSalary=grossSalary-(Tax+NHIFDeductions+NSSFDeduction);//Calculation to obtain net salary

    return{
        grossSalary,
        Tax,
        NHIFDeductions,
        NSSFDeduction,
        netSalary
    }
}
//display of returned solutions
const display=NetSalary(basicSalary,benefits)
console.log("grossSalary:",display.grossSalary)
console.log("NHIFDeductions:",display.grossSalary)
console.log("NSSFDeductions:",display.grossSalary)
console.log("Tax:",display.Tax)
console.log("netsalary:",display.netSalary)
