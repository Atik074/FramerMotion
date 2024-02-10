import { motion, useMotionValue, useTransform } from "framer-motion";

const UseMotionValue = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x , [-300,300], [.5, 1.5])
  const rotate = useTransform(x , [-300,300], [0, 360])

  return (
    <div className="border-2 border-red-500   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
      <h1 className="text-2xl mb-4">
        learn UseMotionValue() hook, drag the box left,right
      </h1>

      <motion.div
        style={{ x , scale,rotate }}
        drag="x"
        className=" size-40 bg-stone-500 flex flex-wrap gap-5 rounded-lg"
      ></motion.div>
    </div>
  );
};

export default UseMotionValue;
