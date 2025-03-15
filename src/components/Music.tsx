"use client"

import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// YouTube iframe를 동적으로 불러오기
const YouTubeEmbed = dynamic(
  () => {
    return Promise.resolve(({ youtubeId, title }: { youtubeId: string; title: string }) => (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ))
  },
  { ssr: false }
)

const MusicCard = ({ title, cover, youtubeId }: { 
  title: string; 
  cover: string;
  youtubeId: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <motion.div
      className="bg-white/90 rounded-lg overflow-hidden shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video">
        {isMounted && isPlaying ? (
          <YouTubeEmbed youtubeId={youtubeId} title={title} />
        ) : (
          <>
            <img src={cover} alt={title} className="w-full h-full object-cover" />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
            >
              <PlayIcon className="w-12 h-12 text-white" />
            </button>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>
      </div>
    </motion.div>
  )
}

const Music = () => {
  const tracks = [
    {
      title: "기타 연주 1",
      cover: "https://i3.ytimg.com/vi/YOUTUBE_ID_1/maxresdefault.jpg",
      youtubeId: "YOUTUBE_ID_1"
    },
    {
      title: "기타 연주 2",
      cover: "https://i3.ytimg.com/vi/YOUTUBE_ID_2/maxresdefault.jpg",
      youtubeId: "YOUTUBE_ID_2"
    },
    {
      title: "기타 연주 3",
      cover: "https://i3.ytimg.com/vi/YOUTUBE_ID_3/maxresdefault.jpg",
      youtubeId: "YOUTUBE_ID_3"
    },
    {
      title: "기타 연주 4",
      cover: "https://i3.ytimg.com/vi/YOUTUBE_ID_4/maxresdefault.jpg",
      youtubeId: "YOUTUBE_ID_4"
    },
  ]

  return (
    <section id="music" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Music</h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MusicCard {...track} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/results?search_query=%EC%8A%A4%EC%9B%A8%EB%8D%B4%EC%84%B8%ED%83%81%EC%86%8C+%EB%9D%BC%EC%9D%B4%EB%B8%8C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            더 보러가기
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Music 