import { motion } from "framer-motion";
const Lesson1 = () => {
  return (
    <div>
      <motion.div className="w-[200px] h-[200px] bg-green-900  rounded-lg"
          initial={{rotate:0}}
          animate={{rotate: 30}}
          transition={{duration:3}}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
