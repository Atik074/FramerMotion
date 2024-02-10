import {  useRef } from "react";
import { motion, useInView} from "framer-motion"

const Inview = () => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref)
   

    return (
        <div className="border-2 border-red-500   size-[500px]  flex flex-col justify-center items-center mt-12 rounded">
        <h1 className="text-2xl mb-4">learn Inview hook,to view please reload</h1>
      
        <motion.div
            ref={ref}
            animate={inView ? {opacity:1 , x:0} : {opacity:0 , x:-500}}
          className=" size-40 bg-green-600 flex flex-wrap gap-5 rounded-lg"
        ></motion.div>
      </div>
    );
};

export default Inview;