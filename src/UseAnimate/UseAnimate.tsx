import { useAnimate } from "framer-motion";

const UseAnimate = () => {
  const [scope, animate] = useAnimate();

  const handleClick = () => {
    animate(scope.current, { scale: 2, rotate: 180 });
  };
  return (
    <div className="border-2 border-red-500   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
      <h1 className="text-2xl mb-4">learn Inview hook</h1>

      <div
        ref={scope}
        onClick={handleClick}
        className=" size-40 bg-yellow-600 flex flex-wrap gap-5 rounded-lg"
      ></div>
    </div>
  );
};

export default UseAnimate;
