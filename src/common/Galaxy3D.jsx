import { motion } from "framer-motion";

const Galaxy3D = ({ position }) => {
  return (
    <div className={`absolute ${position} perspective-[800px]`}>
      
      <motion.div
        className="relative w-[350px] h-[350px]"
        animate={{
          rotateZ: 360,
          rotateX: [20, -20, 20],
          rotateY: [0, 30, -30, 0],
        }}
        transition={{
          rotateZ: {
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          },
          rotateX: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >

        {/* Core */}
        <div className="absolute inset-0 rounded-full bg-purple-500 blur-3xl opacity-40" />

        {/* Spiral Layer 1 */}
        <div className="absolute inset-0 rounded-full 
          bg-[conic-gradient(from_0deg,_transparent,_purple,_transparent,_blue,_transparent)] 
          blur-2xl opacity-60" />

        {/* Spiral Layer 2 */}
        <div className="absolute inset-6 rounded-full 
          bg-[conic-gradient(from_90deg,_transparent,_pink,_transparent,_purple,_transparent)] 
          blur-xl opacity-50" />

        {/* Spiral Layer 3 */}
        <div className="absolute inset-12 rounded-full 
          bg-[conic-gradient(from_180deg,_transparent,_blue,_transparent,_pink,_transparent)] 
          blur-lg opacity-40" />

      </motion.div>
    </div>
  );
};

export default Galaxy3D;