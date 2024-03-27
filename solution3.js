const basicSalary=50000;
const benefits=4000;

function NetSalary(basicSalary,benefits){
    const NHIF=0.02;
    const Taxrate=0.03;
    const NSSF=0.06;

    const grossSalary=basicSalary+benefits
    const Tax=grossSalary*Taxrate;
    const NHIFDeductions=grossSalary*NHIF
    const NSSFDeduction=grossSalary*NSSF


    const netSalary=grossSalary-(Tax+NHIFDeductions+NSSFDeduction);

    return{
        grossSalary,
        Tax,
        NHIFDeductions,
        NSSFDeduction,
        netSalary
    }
}
const display=NetSalary(basicSalary,benefits)
console.log("grossSalary:",display.grossSalary)
console.log("NHIFDeductions:",display.grossSalary)
console.log("NSSFDeductions:",display.grossSalary)
console.log("Tax:",display.Tax)
console.log("netsalary:",display.netSalary)
