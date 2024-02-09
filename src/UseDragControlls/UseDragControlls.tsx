import {motion,  useDragControls } from "framer-motion";

const UseDragControlls = () => {
    const controls = useDragControls()
  return (
    <div className="border-2 border-red-500   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
      <h1 className="text-2xl mb-4">learn UseDragControlls</h1>

      <div
      onPointerDown={(e)=>{controls.start(e)}}
       className="size-40 bg-slate-600 h-8 mb-2 flex flex-wrap gap-5 rounded-lg"></div>
      <motion.div 
        drag= "x"
        dragControls={controls}

      className=" size-40 bg-orange-300 flex flex-wrap gap-5 rounded-lg"></motion.div>
    </div>
  );
};

export default UseDragControlls;
