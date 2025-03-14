"use client"

import { motion } from 'framer-motion'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const MusicCard = ({ title, duration, cover }: { title: string; duration: string; cover: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-square">
        <img src={cover} alt={title} className="w-full h-full object-cover" />
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity"
        >
          {isPlaying ? (
            <PauseIcon className="w-12 h-12 text-white" />
          ) : (
            <PlayIcon className="w-12 h-12 text-white" />
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-400">{duration}</p>
      </div>
    </motion.div>
  )
}

const Music = () => {
  const tracks = [
    { title: "Track 1", duration: "3:45", cover: "/track1.jpg" },
    { title: "Track 2", duration: "4:20", cover: "/track2.jpg" },
    { title: "Track 3", duration: "3:30", cover: "/track3.jpg" },
    { title: "Track 4", duration: "5:15", cover: "/track4.jpg" },
  ]

  return (
    <section id="music" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Music</h2>
          <div className="w-20 h-1 bg-white mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            href="#"
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            View All Tracks
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Music 