"use client"

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center">
          <div className="w-full h-full bg-black/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-xl md:text-2xl lg:text-3xl font-bold mb-4 animate-bounce bg-gradient-to-r from-lime-500 via-sky-500 to-indigo-500 text-transparent bg-clip-text p-1 tracking-wider transform hover:scale-110 transition-transform duration-300 cursor-default'>
            축 개강 🎉
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">왕초보 기타교실</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">Singer-Songwriter & Guitarist</p>
          {/* <motion.button
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Listen Now
          </motion.button> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div> */}
    </section>
  )
}

export default Hero 