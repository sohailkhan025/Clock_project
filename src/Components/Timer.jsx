import React, { useEffect, useState, useRef } from "react";
export const Timer = () => {
    const [start, setStart] = useState(false);
    const [hours, sethours] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [id, setid] = useState(false);
    

    useEffect(() => {
        if (start) {
            setid(setInterval(() => {
                setSec((sec) => sec - 1)
            }, 1000))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [start])

    useEffect(() => {
        if (start) {

            if (sec <= 0) {
                setMin(min - 1)
                setSec(59)
                console.log("min");
            }
        }
    }, [sec])

    useEffect(() => {

        if (start) {
            if (min == 0 && sec == 0) {
                setMin(59)
                setSec(59)
                sethours(hours - 1)
                console.log("hour");
            }
        }
    }, [min, sec])





    useEffect(() => {
        if (start) {

            if (sec == 0 && min == 0 && hours == 0) {
                setSec(0)
                setMin(0)
                sethours(0)
               
                setStart(false)

            } else {
              
            }

        }

    })


    const handlehour = (e) => {
        console.log("yoyoyo");
        sethours(e.target.value);

    }
    const handleMin = (e) => {
        setMin(e.target.value)
    }
    const handleSec = (e) => {
        setSec(e.target.value)
    }

    const handleStartTimer = () => {
        setStart(true)

    }
    const handleStop=()=>{
      setStart(false);
    }
    const handReset =()=>{
        setMin(0)
        sethours(0)
        setSec(0)
    }


    return (
        <div className="mainTimercircle  flex-col" >
            <div className="timertext pb-10  flex justify-center">
                <h1 className="text-1xl md:text-3xl  border-b-2 shadow-md shadow-yellow-100" >&nbsp;Timer&nbsp; </h1>
            </div>

            <div className="setAlarm text-5xl border-b-2 text-orange-300 flex justify-center gap-2" >
                <div>{hours}</div><span>:</span>
                <div>{min}</div><span>:</span>
                <div>{sec}</div>
            </div>


            {start ? <div className="h-[7vh]  w-[3.5vw] "></div>
                : <div className="numnbertext pb-10 pt-5  text-3xl  flex gap-5">
                    <div  >
                        <select className="     h-[7vh] md:h-[7vh]    md:w-[3.5vw]  bg-slate-800" onChange={handlehour}>
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>
                            <option value="60">60</option>
                            <option value="61">61</option>
                            <option value="62">62</option>
                            <option value="63">63</option>
                            <option value="64">64</option>
                            <option value="65">65</option>
                            <option value="66">66</option>
                            <option value="67">67</option>
                            <option value="68">68</option>
                            <option value="69">69</option>
                            <option value="70">70</option>
                            <option value="71">71</option>
                            <option value="72">72</option>
                            <option value="73">73</option>
                            <option value="74">74</option>
                            <option value="75">75</option>
                            <option value="76">76</option>
                            <option value="77">77</option>
                            <option value="78">78</option>
                            <option value="79">79</option>
                            <option value="80">80</option>
                            <option value="81">81</option>
                            <option value="82">82</option>
                            <option value="83">83</option>
                            <option value="84">84</option>
                            <option value="85">85</option>
                            <option value="86">86</option>
                            <option value="87">87</option>
                            <option value="88">88</option>
                            <option value="89">89</option>
                            <option value="90">90</option>
                            <option value="91">91</option>
                            <option value="92">92</option>
                            <option value="93">93</option>
                            <option value="94">94</option>
                            <option value="95">95</option>
                            <option value="96">96</option>
                            <option value="97">97</option>
                            <option value="98">98</option>
                            <option value="99">99</option>
                        </select>
                    </div>
                    <div  >
                        <select className="  h-[7vh] md:h-[7vh]    md:w-[3.5vw]   bg-slate-800 " onChange={handleMin} >
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>

                        </select>
                    </div>
                    <div  >
                        <select className="  h-[7vh] md:h-[7vh]    md:w-[3.5vw]   bg-slate-800 " onChange={handleSec} >
                            <option value="00">00</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                            <option value="50">50</option>
                            <option value="51">51</option>
                            <option value="52">52</option>
                            <option value="53">53</option>
                            <option value="54">54</option>
                            <option value="55">55</option>
                            <option value="56">56</option>
                            <option value="57">57</option>
                            <option value="58">58</option>
                            <option value="59">59</option>



                        </select>
                    </div>

                </div>

            }


     {start ? 
     <>            <div className="pb-5 flex justify-center">

                <button onClick={handleStop} className="  rounded-xl bg-red-600  text-lg md:text-xl    h-[7vh]  md:h-[4.5vh]   md:w-[7vw]"  >Stop Timer</button>
                </div>
     
            <div className="pb-5 flex justify-center">

                <button onClick={handReset} className="  rounded-xl bg-yellow-500  text-lg md:text-xl    h-[7vh]  md:h-[4.5vh]   md:w-[7vw]"  >Resert</button>
                </div>
                </>

     :

     <div className="pb-5 flex justify-center">

         <button onClick={handleStartTimer} className="  rounded-xl bg-green-500  text-lg md:text-xl    h-[7vh]  md:h-[4.5vh]   md:w-[7vw]"  >Set Timer</button>
         </div>
}
</div>
    )

}
