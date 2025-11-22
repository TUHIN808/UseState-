import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  
  const increment = () =>
  { setCounter(counter + 1) };
  const decrement = () => {
    if
      (counter > 0) {
      setCounter(counter - 1)
    }
  };
  const multiply = () =>
  { setCounter(counter * 2) };
  const divided = () =>
  { setCounter(counter / 3) };

  
  const reset = () => { setCounter(0) }; 

  return (
    <>
    <div className="bg-blue-300">
      
  
       <div className="flex  flex-row justify-center items-center  h-full  mx-auto mt-[30px]">
        <div className="bg-orange-300 h-[90px] w-[150px]  rounded-full flex justify-center items-center text-4xl overflow-hidden ">
          <h1>{counter}</h1>
          
          
       </div>
        
     


</div>
      <div className="flex  flex-row justify-center items-center  h-full  mx-auto mt-[30px]">
      <button className="text-black text-2xl bg-purple-300  rounded-2xl hover:bg-red-900 cursor-pointer h-10 w-30 " onClick={reset}>Reset</button>
          
          
       </div>
      <div className="flex flex-row justify-center items-center gap-5 mx-auto h-screen w-full flex-wrap">

  <div
    className="bg-orange-300 h-[90px] w-[120px] rounded-full flex justify-center items-center text-4xl cursor-pointer"
    onClick={increment}
  >
    +
  </div>

  <div className="bg-white h-[90px] w-[120px] rounded-full flex justify-center items-center text-4xl cursor-pointer" onClick ={decrement}>
    -
  </div>

  <div className="bg-red-300 h-[90px] w-[120px] rounded-full flex justify-center items-center text-4xl cursor-pointer "onClick ={multiply}>
    *
  </div>

  <div className="bg-green-300 h-[90px] w-[120px] rounded-full flex justify-center items-center text-4xl cursor-pointer" onClick ={divided}>
    /
  </div>

        </div>
          </div>

     </>
  );
}

export default App;
