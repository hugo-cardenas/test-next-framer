"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => setAnimate(true), []);

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-1">
      <div className="flex flex-row justify-center items-center w-[224px] h-[116px] px-2 gap-2 bg-gray-300">
        <motion.div
          className="w-[100px] h-[100px] bg-red-400"
          initial={{ opacity: 1, y: 100 + 20 }}
          animate={
            animate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.div
          className="w-[100px] h-[100px] bg-blue-400"
          initial={{ opacity: 0, y: 100 + 20 }}
          animate={
            animate
              ? {
                  opacity: 1,
                  y: 0,
                }
              : undefined
          }
          transition={{
            delay: 1,
            duration: 0.5,
          }}
        />
      </div>
      <div className="flex flex-row justify-center items-center w-[224px] h-[116px] px-2 gap-2 bg-gray-300" />
    </main>
  );
}
