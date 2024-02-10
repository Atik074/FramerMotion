import { motion, useScroll } from "framer-motion";

const UseScroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-1 bg-pink-800 w-full  fixed top-0"
    ></motion.div>
  );
};

export default UseScroll;
