"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const albums = [
  {
    id: 1,
    title: "From. Paris",
    artist: "스웨덴세탁소",
    cover: "/album1.jpg"
  },
  {
    id: 2,
    title: "잠들때까지",
    artist: "스웨덴세탁소",
    cover: "/album2.jpg"
  },
  {
    id: 3,
    title: "순간",
    artist: "스웨덴세탁소",
    cover: "/album3.jpg"
  },
  {
    id: 4,
    title: "우리집",
    artist: "Guitar Academy",
    cover: "/album4.jpg"
  },
  {
    id: 5,
    title: "Be Your Christmas",
    artist: "스웨덴세탁소",
    cover: "/album5.jpg"
  },
  {
    id: 6,
    title: "내가 사랑하는 시간",
    artist: "스웨덴세탁소",
    cover: "/album6.jpg"
  },
  {
    id: 7,
    title: "우리가 핀 1 - 잔상(殘像)",
    artist: "스웨덴세탁소",
    cover: "/album7.jpg"
  },
  {
    id: 8,
    title: " 우리가 핀 2 - 조각",
    artist: "스웨덴세탁소",
    cover: "/album8.jpg"
  },
  {
    id: 9,
    title: " 사랑의 모양",
    artist: "스웨덴세탁소",
    cover: "/album9.jpg"
  },
  {
    id: 10,
    title: "꿈결",
    artist: "스웨덴세탁소",
    cover: "/album10.jpg"
  },
  {
    id: 11,
    title: "푸른동경",
    artist: "스웨덴세탁소",
    cover: "/album11.jpg"
  },
  {
    id: 12,
    title: "오렌지 빛을 쥐고",
    artist: "스웨덴세탁소",
    cover: "/album12.jpg"
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