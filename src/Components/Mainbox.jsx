import React from "react";
import CloclkCricle from "./ClockCircle";
import Clock from "./Clock";
import { Timer } from "./Timer";
const MainBox = () => {
    return (
        <div className="mainDiv h-[100vh] w-[100vw] bg-black flex justify-center items-center ">
            <div className="squareDiv border-2  overflow-scroll  md:w-[500px] max-w-[850px]: h-[50vh] md:h-[70vh] min-w-[350px] p-1 relative shadow-md shadow-lime-400">
                <div className="flex  justify-center items-center  h-[90%] w-[30] rounded-[50%]  text-white border-2  shadow-lg shadow-emerald-300 ">
                    <CloclkCricle />

                </div>
                <div className="h-[12%]">
                    
                </div>
                <div className="flex justify-center items-center  h-[90%] w-[30] rounded-[50%]  text-white border-2  shadow-lg shadow-emerald-300 ">
                    <Clock/>

                </div>
                <div className="h-[10%]">
                    
                </div>
                
                <div className="h-[50px]  w-[50px] absolute  right-2 bottom-2 text-xl   text-white "   >   Swipe <br />Down </div>
                <div className="h-[50px]  w-[50px] absolute  left-2 bottom-2  text-xl   text-white "   >    Swipe <br />Down  </div>


                <div className="flex  justify-center items-center  h-[90%] w-[30] rounded-[50%]  text-white border-2  shadow-lg shadow-emerald-300 ">
                    <Timer/>

                </div>
            </div>
        </div>
    )
}
export default MainBox;