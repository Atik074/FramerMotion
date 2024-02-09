import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Lesson2 = () => {
  const controls = useAnimationControls();
  const [toggle ,setToggle] = useState(false)

  const handleToggle =()=>{
       setToggle(!toggle)
       if(toggle){
          controls.start({x:100})
         }
          else{
            controls.start({x:-100})
          }
   }
 

  return (
    <div className="border-2 border-red-700   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
   <div>
   <button onClick={handleToggle} className=" p-3 m-4 bg-slate-950 text-white  rounded-lg">
       Toggle
      </button>
  
   </div>
      <motion.div animate={controls} className=" size-64 bg-indigo-500 flex flex-wrap gap-5 rounded-lg"></motion.div>
    </div>
  );
};

export default Lesson2;
