'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import InteractiveBackground from '../components/InteractiveBackground';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <InteractiveBackground />
      </div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl max-w-4xl w-full p-8 md:p-12 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left Column - Name and Photo */}
          <div className="flex flex-col items-center md:items-start space-y-6 md:w-1/3">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-center md:text-left text-gray-900"
            >
              Varun Vaidya
            </motion.h1>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
                <Image
                  src="/images/ProfHeadshot.png"
                  alt="Varun Vaidya"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Background Text and Links */}
          <div className="flex flex-col space-y-6 md:w-2/3">
            {/* Background Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <p className="text-base md:text-lg">
                Hey, there! I&apos;m a junior at UC Berkeley studying Electrical Engineering and Computer Science.
                I&apos;m a developer for Blockchain at Berkeley and Web Development at Berkeley, 
                where I have worked on projects spanning blockchain infrastructure and full-stack web apps.
              </p>

              <p className="text-base md:text-lg">
              In the past, I’ve been a researcher at UC Berkeley’s Sky Computing Lab working on Gorilla LLM, 
              built ERC-20 Paymaster services at Coinbase, and developed arbitrage tools at the Starknet Foundation.
              </p>

              <p className="text-base md:text-lg">
              Outside of school, I’m just someone who loves tinkering with technology, 
              exploring how blockchain and AI can be applied in the real world, 
              and building things that (hopefully) make an impact.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center md:justify-start items-center space-x-8 pt-4 border-t border-gray-200"
            >
              <motion.a
                href="mailto:vvaidya2705@gmail.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                <span className="text-sm font-medium">Email</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/vsvaidya27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/varun-s-vaidya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
