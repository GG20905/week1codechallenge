const grades=50
if(grades>79 && grades <=100){
    console.log('A')
}if(grades>=60 && grades <=79){
    console.log('B')
}if(grades>49 && grades <=59){
    console.log('C')
}if(grades>40 && grades <=49){
    console.log('D')
}if(grades>0 && grades <=40){
    console.log('E')
}if(grades<0 || grades >100){
    console.log('Not a valid mark')
}