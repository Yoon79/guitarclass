"use client"

import { motion } from 'framer-motion'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

const CourseCard = ({ title, items, isRight = false }: {
  title: string;
  items: { level: string; description: string[] }[];
  isRight?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/95 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <motion.h3
        initial={{ opacity: 0, x: isRight ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4"
      >
        {title}
      </motion.h3>

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.level}
            initial={{ opacity: 0, x: isRight ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-6"
          >
            <div className="mb-3">
              <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {item.level}
              </h4>
            </div>
            <ul className="space-y-2">
              {item.description.map((desc, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <MusicalNoteIcon className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Curriculum = () => {
  const acousticGuitar = [
    {
      level: "입문 과정",
      description: [
        "기타의 기본 구조와 관리법",
        "기본 코드와 스트럼 패턴",
        "손가락 운지법과 기초 연습",
        "기본적인 음악 이론"
      ]
    },
    {
      level: "초급 과정",
      description: [
        "다양한 스트럼 패턴",
        "핑거스타일 기초",
        "코드 체인지 스피드 향상",
        "간단한 곡 연주하기"
      ]
    },
    {
      level: "중급 과정",
      description: [
        "핑거스타일 심화",
        "타핑과 하모닉스 주법",
        "응용 코드와 보이싱",
        "즉흥 연주 기초"
      ]
    },
    {
      level: "고급 과정",
      description: [
        "고급 핑거스타일 테크닉",
        "퍼커시브 기타 테크닉",
        "편곡과 작곡 기법",
        "공연 실전 테크닉"
      ]
    }
  ]

  const electricGuitar = [
    {
      level: "입문 과정",
      description: [
        "일렉기타와 앰프의 기초",
        "기본 파워코드와 리프",
        "픽킹 테크닉 기초",
        "기본적인 음악 이론"
      ]
    },
    {
      level: "초급 과정",
      description: [
        "펜타토닉 스케일",
        "이펙터 활용법",
        "리드 플레이 기초",
        "밴드 플레이 기초"
      ]
    },
    {
      level: "중급 과정",
      description: [
        "다양한 스케일과 모드",
        "리드 기타 테크닉",
        "밴드 앙상블 실습",
        "즉흥 솔로 연주"
      ]
    },
    {
      level: "고급 과정",
      description: [
        "고급 솔로 테크닉",
        "스윕 피킹과 탭핑",
        "재즈 하모니와 즉흥연주",
        "레코딩과 공연 테크닉"
      ]
    }
  ]

  return (
    <section id="curriculum" className="py-20 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            커리큘럼
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            당신만의 기타 연주를 만들어가는 여정
          </motion.p>
          <div className="w-20 h-1 bg-gray-800 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Acoustic Guitar Course"
            items={acousticGuitar}
          />
          <CourseCard
            title="Electric Guitar Course"
            items={electricGuitar}
            isRight={true}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            수업 신청하기
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Curriculum 