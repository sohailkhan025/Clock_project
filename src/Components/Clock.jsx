import React, { useEffect, useState } from "react";
const Clock= ()=>{
   
 const  [sec,setSec]=useState(0); 
 const [min,setMin]=useState(0); 
 const [hour,setHour]=useState(0); 
setInterval(()=>{

let clock=new Date();

   clock=clock.toTimeString().split(" ")[0].split(":");
   setSec(clock[0])
   setMin(clock[1])
   setHour(clock[2])


},1000)
   

   return(

    <>

   <div className="flex gap-4  flex-col " >
   
      <div className=" flex justify-center md:pb-9 "><h1 className="text-3xl md:text-5xl shadow-md shadow-green-400  border-b-2" >world clock</h1>
   </div>
   <div className="flex text-5xl  pb-8 gap-4">
<div>  {sec}  </div>
<span>:</span>
<div> {min}   </div>
<span>:</span>
<div>   {hour} </div>

</div>
<div className=" flex  justify-center  items-center"><h3  className=" border-b-2">INDIA &nbsp;</h3><span  className=" border-b-2">GMT+5:30</span></div>
</div>

</>
    )

}
export default Clock;