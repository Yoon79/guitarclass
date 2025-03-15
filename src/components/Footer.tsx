"use client"

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 빠른 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="text-xl font-semibold">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#album" className="text-gray-400 hover:text-white transition-colors">
                  Albums
                </a>
              </li>
              <li>
                <a href="#curriculum" className="text-gray-400 hover:text-white transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 로고 및 소개 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-bold">윤이의 기타교실</h3>
            <p className="text-gray-400">
              즐거운 기타연주를 지향합니다.
            </p>
          </motion.div>

          {/* 연락처 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="text-xl font-semibold">폰트 저작권</h4>
            <ul className="space-y-2 text-gray-400">
              <li>✏️ 칠곡할매 추유를 체</li>
              <li>
                <a 
                  href="https://www.chilgok.go.kr/portal/contents.do?mId=0404070100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  칠곡할매글꼴 바로가기
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 구분선 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-px bg-gray-800 my-8"
        />

        {/* 저작권 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500"
        >
          <p>© {currentYear} 윤이의 기타교실. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 