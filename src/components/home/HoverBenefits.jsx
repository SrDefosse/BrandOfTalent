import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Manual cn function to replace shadcn utility
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Direction-aware hover component
export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");

  const handleMouseEnter = (event) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "bg-transparent rounded-lg overflow-hidden group/card relative shadow-lg hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="block md:hidden md:group-hover/card:block absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <img
              alt="image"
              className={cn(
                "h-full w-full object-cover scale-[1.15]",
                imageClassName
              )}
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40 opacity-100 md:opacity-0 md:group-hover/card:opacity-100",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Animation variants
const variants = {
  initial: {
    x: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
  },
  exit: {
    y: 0,
    x: 0,
  },
  top: {
    y: -20,
  },
  bottom: {
    y: 2,
  },
  left: {
    x: -2,
  },
  right: {
    x: 2,
  },
};

// Main HoverBenefits component with 4 cards
export default function HoverBenefits() {
  const benefits = [
    {
      imageUrl: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg",
      title: "Acceso a +2,000 talentos",
      description: ""
    },
    {
      imageUrl: "https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg",
      title: "Celebridades y talentos escénicos",
      description: ""
    },
    {
      imageUrl: "https://images.pexels.com/photos/5725589/pexels-photo-5725589.jpeg",
      title: "Cobertura México, Centro y Sudamérica, y Europa",
      description: ""
    },
    {
      imageUrl: "https://images.pexels.com/photos/3943951/pexels-photo-3943951.jpeg",
      title: "Publicidad con sentido y conexión emocional",
      description: ""
    }
  ];
  
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
          {benefits.map((benefit, index) => (
            <DirectionAwareHover 
              key={index}
              imageUrl={benefit.imageUrl}
              className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
            >
              <p className="font-bold text-lg">{benefit.title}</p>
              <p className="font-normal text-xs sm:text-sm">{benefit.description}</p>
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </div>
  );
}
