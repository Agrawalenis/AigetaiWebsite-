import { motion, AnimatePresence } from "framer-motion";
import decoPineapple from "../assets/deco-pineapple.png";
import decoTomatoes from "../assets/deco-tomatoes.png";
import decoCheese from "../assets/deco-cheese.png";
import decoVeggies from "../assets/deco-veggies.png";

interface DecoImagesProps {
  currentIndex: number;
}

const decoConfigs = [
  { left: decoPineapple, right: decoPineapple },
  { left: decoTomatoes, right: decoVeggies },
  { left: decoCheese, right: decoTomatoes },
  { left: decoTomatoes, right: decoCheese },
  { left: decoTomatoes, right: decoVeggies },
  { left: decoVeggies, right: decoVeggies },
  { left: decoTomatoes, right: decoVeggies },
];

const DecoImages = ({ currentIndex }: DecoImagesProps) => {
  const deco = decoConfigs[currentIndex % decoConfigs.length];

  return (
    <>
      {/* TOP LEFT */}
      <AnimatePresence mode="wait">
        <motion.img
  key={`left-${currentIndex}`}
  src={deco.left}
  style={{ width: "500px" }}
  className="absolute pointer-events-none top-10 left-32 w-5"
  initial={{ opacity: 0, x: -40, y: -20 }}
  animate={{ opacity: 0.85, x: -100, y: 0 }}
  exit={{ opacity: 0, x: -40, y: -20 }}
  transition={{ duration: 0.6 }}
/>
      </AnimatePresence>

      {/* TOP RIGHT */}
      <AnimatePresence mode="wait">
        <motion.img
  key={`right-${currentIndex}`}
  src={deco.right}
  style={{ width: "500px" }}
  className="absolute pointer-events-none top-10 right-32 w-5"
  initial={{ opacity: 0, x: 40, y: -20 }}
  animate={{ opacity: 0.85, x: 100, y: 0 }}
  exit={{ opacity: 0, x: 40, y: -20 }}
  transition={{ duration: 0.6, delay: 0.1 }}
/>
      </AnimatePresence>
    </>
  );
};

export default DecoImages;
