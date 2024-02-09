import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: {   x:0 , y:0 },
  visible: { 
    x:[0,200,300, 500,40] ,
    y:200,
   },
  
  tap: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 3,
      
   
    },
  },
};
const child = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Lesson1 = () => {
  const parentRef = useRef(null);

  return (
    <div ref={parentRef}>
      <motion.div
        className="p-4 shadow-2xl w-[300px] bg-white rounded-lg "
        variants={parent}
        initial="hidden"
        animate="visible"
        whileTap="tap"
        whileDrag={{
          scale: 1.3,
        }}
        drag
        dragConstraints={parentRef}
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          staggerChildren: 1,
        }}
      >
        <div className="flex  gap-x-[8px] mb-2">
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
        </div>
        <div className="flex gap-x-[8px] mb-2">
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
        </div>
        <div className="flex gap-x-[8px] mb-2">
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
          <motion.div
            className="size-20 bg-green-500 rounded shadow-lg"
            variants={child}
          ></motion.div>
        </div>

        {/* <motion.div
          className="size-20 bg-green-500 rounded shadow-lg"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-green-500 rounded  shadow-lg"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-green-500 rounded shadow-lg"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-green-500 rounded shadow-lg"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-green-500 rounded shadow-lg"
          variants={child}
        ></motion.div>
        <motion.div
          className="size-20 bg-green-500 rounded shadow-lg"
          variants={child}
        ></motion.div> */}
      </motion.div>
    </div>
  );
};

export default Lesson1;
