
  const currentspeed=80//Current speed limit
  const speedlimit=70//Constant speed limit on the road provided
  const beyondlimitpts=12;
  const points= Math.abs(currentspeed-speedlimit)/5

    if(speed <70){//Below speed limit
     console.log('Ok') 
     return 0  
    }


   else if (points >=beyondlimitpts){
    console.log('license suspended')
   }
 else if(speed>70){
     console.log("points"+ points); //Provides points for each speed breakpoint which occur at intervals of 5 
    
}

    
   

