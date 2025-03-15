"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const Curriculum = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: "/gallery1.jpg", alt: "Performance 1" },
    { src: "/gallery2.jpg", alt: "Performance 2" },
    { src: "/gallery3.jpg", alt: "Studio Session" },
    { src: "/gallery4.jpg", alt: "Live Concert" },
    { src: "/gallery5.jpg", alt: "Behind the Scenes" },
    { src: "/gallery6.jpg", alt: "Recording" },
  ]

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Curriculum</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage}
                alt="Selected image"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Curriculum 