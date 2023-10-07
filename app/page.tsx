"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24 gap-16">
      <div className="flex flex-col items-center pt-32 h-screen gap-4">
        {/* <div>TITLE</div> */}
        <motion.div
          className="w-10 h-10 bg-red-400"
          initial={{ opacity: 0, y: 64, rotate: 360 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{ delay: 0, duration: 1 }}
        />
        <motion.div
          className="w-10 h-10 bg-blue-400"
          initial={{ opacity: 0, y: 64, rotate: 360 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{ delay: 0, duration: 1 }}
        />
      </div>
    </main>
  );
}
