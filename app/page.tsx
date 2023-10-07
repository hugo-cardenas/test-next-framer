"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 gap-4">
      <div className="flex flex-row justify-center items-center h-16 w-36 px-4 gap-4 bg-gray-200">
        {/* <div>TITLE</div> */}
        <motion.div
          className="w-10 h-10 bg-red-400"
          initial={{ opacity: 1, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0, duration: 1 }}
        />
        <motion.div
          className="w-10 h-10 bg-blue-400"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>
      <div className="flex flex-row justify-center items-center h-16 w-36 px-4 gap-4 bg-gray-200" />
    </main>
  );
}
