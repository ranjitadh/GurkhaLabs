import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface DropLetterProps extends HTMLAttributes<HTMLDivElement> {
  applyMask?: boolean;

  text?: string;

  delay?: number;

  direction?: "up" | "drop";
}

export default function StaggeredLetter({
  applyMask = true,
  text = "Animata",
  delay = 0.09,
  direction = "up",
  className,
  ...props
}: DropLetterProps) {
  const common = "text-7xl font-bold ";
  return (
    <div
      className={cn(
        "  items-center justify-center ",
        className,
      )}
      {...props}
    >
      {applyMask && <div className={cn(common, " flex justify-center items-center absolute text-gray-300")}>{text}</div>}
      <div className="flex justify-center items-center">
        {text.split("").map((e, index) => (
          <motion.div
         
             key={index}
          
            className={common}
            initial={{ opacity: 0, y: direction === "up" ? 150 : -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * delay,
            }}
          >
            {e === " " ? <span>&nbsp;</span> : e}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
