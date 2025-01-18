"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Header from "@/components/header/header";
import Image from "next/image";
import Link from "next/link";

export default function YourComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div className="mt-[5vh] ">
      <Header />
      <div className="flex flex-col items-center text-center">
        <motion.h1
          ref={ref}
          className="text-4xl sm:text-5xl lg:text-7xl text-black font-semibold pt-12"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 2.5, type: "spring", stiffness: 30 }}
        >
          خلیج فارس ...
        </motion.h1>

        {inView && (
          <motion.div
            className="flex flex-col justify-center items-center mt-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, type: "spring", stiffness: 30 }}
          >
            <Image
              src="/13.webp"
              alt="Persian Gulf"
              className="w-full max-w-lg h-auto"
              width={1000}
              height={1000}
            />
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, type: "spring", stiffness: 30 }}
              className="text-xl sm:text-2xl lg:text-3xl text-green-700 mt-6"
            >
              همیشه خلیج فارس خواهد موند✌️✌️
            </motion.h3>
          </motion.div>
        )}

        <div className="pt-[15vh] text-lg sm:text-xl lg:text-2xl text-gray-700">
          برای خواندن جدیدترین مقاله‌ها{" "}
          <Link
            className="text-blue-600 hover:text-blue-800 transition duration-200"
            href="/blogs"
          >
            کلیک کنید
          </Link>
        </div>
      </div>
    </div>
  );
}
