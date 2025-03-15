"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const albums = [
  {
    id: 1,
    title: "Acoustic Dreams",
    artist: "Guitar Academy",
    cover: "/album1.jpg"
  },
  {
    id: 2,
    title: "Electric Vibes",
    artist: "Guitar Academy",
    cover: "/album2.jpg"
  },
  {
    id: 3,
    title: "Fingerstyle Journey",
    artist: "Guitar Academy",
    cover: "/album3.jpg"
  },
  {
    id: 4,
    title: "Blues & Beyond",
    artist: "Guitar Academy",
    cover: "/album4.jpg"
  },
  {
    id: 5,
    title: "Classical Fusion",
    artist: "Guitar Academy",
    cover: "/album5.jpg"
  },
  {
    id: 6,
    title: "Rock Legends",
    artist: "Guitar Academy",
    cover: "/album6.jpg"
  }
]

const Album = () => {
  const [duplicatedAlbums, setDuplicatedAlbums] = useState(albums)

  useEffect(() => {
    // 더 자연스러운 무한 스크롤을 위해 앨범 목록을 3번 복제
    setDuplicatedAlbums([...albums, ...albums, ...albums])
  }, [])

  return (
    <section id="album" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            앨범
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            발매 앨범들
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              className="flex gap-8 w-fit"
            >
              {duplicatedAlbums.map((album, index) => (
                <motion.div
                  key={`${album.id}-${index}`}
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                  className="flex-shrink-0"
                >
                  <div className="w-64 h-64 relative group">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold mb-2">{album.title}</h3>
                      <p className="text-white text-sm">{album.artist}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Album 