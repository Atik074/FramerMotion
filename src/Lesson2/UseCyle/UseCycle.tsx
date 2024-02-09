import { motion, useCycle } from "framer-motion";

const UseCycle = () => {
  const boxAnimation = [
    { x: 0, y: 0 },
    { x: 100, y: 100},
    { x: -100, y: 100 },
    { x: -100, y: -100 }
 
  ];
  const [x, cycleX] = useCycle(...boxAnimation);
  return (
    <div className="border-2 border-red-700   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
      <h1 className="text-2xl mb-4">UseCyle</h1>
      <div></div>
      <motion.div
        animate={x}
        onTap={() => cycleX()}
        className=" size-40 bg-indigo-500 flex flex-wrap gap-5 rounded-lg"
      ></motion.div>
    </div>
  );
};

export default UseCycle;
