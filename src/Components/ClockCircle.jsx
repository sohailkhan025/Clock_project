import React from "react";
import { useEffect, useState } from "react";

const CloclkCricle = () => {


    const [hours, setHours] = useState(0)
    const [mins, setMins] = useState(0)
    const [second, setSecond] = useState(0)
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false)
    const [Laps, setLaps] = useState([]);
    const [counter, setCounter] = useState(1);


    useEffect(() => {
        if (stop) {
            setId(setInterval(() => {
                setSecond((second) => second + 1)
            }, 1000))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (second >= 60) {
            setMins(mins + 1)

            setSecond(0)
        }
    }, [second])

    useEffect(() => {
        if (mins == 59 && second == 60) {
            setMins(0)
            setSecond(0)
            setHours(hours + 1)
        }
    }, [mins, second])


    const handleStart = () => {
        setStop(true)
        // console.log(time.getTime());
    }
    const handleStop = () => {
        setStop(false)

    }
    const handleLaps = () => {
        if(stop){

            setCounter(counter + 1);
    
            Laps.push(` ${counter}_ ${hours} :  ${mins}  : ${second}`)

        }
    }

    const handleReset = () => {
        Laps.splice(0, Laps.length);
        setCounter(1);
        setHours(0)
        setMins(0)
        setSecond(0)
        setStop(false)
    }

    return (
        <>

            <div className="flex flex-col  justify-center items-center">
                <div className="flex justify-center font-semibold h-[10vh] items-center pb-10   bottom-2"><h1 className="text-1xl md:text-3xl  border-b-2 shadow-md shadow-yellow-100" >STOPWATCH</h1></div>
                <div className="flex    text-4xl md:text-7xl  gap-4">
                    <div className="p-4"  > {hours}</div>
                    <span>:</span>
                    <div className="p-4" >{mins}</div>
                    <span>:</span>
                    <div className="p-4"  >{second}</div>
                </div>

                <div className="flex text-1xl md:text-2xl gap-3 justify-center" >
                    {stop ?
                        <button className=" rounded-[20%] hover:shadow-sm hover:shadow-orange-300  bg-red-500 p-2 " onClick={handleStop} >STOP </button> :
                        <button className=" rounded-[20%]  bg-green-400 hover:shadow-sm hover:shadow-orange-300 p-2 " onClick={handleStart} >START </button>}

                    <button className=" rounded-[20%] hover:shadow-sm hover:shadow-orange-300 bg-yellow-400 p-2 " onClick={handleReset}> RESERT</button>
                    <button  className=" rounded-[20%] hover:shadow-sm hover:shadow-orange-300 p-2 bg-blue-400 "  onClick={handleLaps} >LAPS</button>
                </div>


                <div className="flex overflow-scroll gap-4  h-20 w-[30vh] justify-center items-center">
                    <div>{Laps.map((value) => {
                        return <div>{value}</div>;
                        })}

                    </div>
                </div>
            </div>

        </>

    )

}
export default CloclkCricle;