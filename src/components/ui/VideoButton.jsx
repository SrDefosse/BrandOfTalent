import React from 'react';
import { motion } from 'framer-motion';

export const VideoButton = ({ label, videoUrl, onClick }) => {
  return (
    <motion.button
      className="relative overflow-hidden rounded-2xl px-6 py-3 text-white font-semibold text-lg bg-black group shadow-lg hover:cursor-pointer"
      whileHover="hover"
      initial="rest"
      animate="rest"
      onClick={onClick}
    >
      {/* Video Background */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        src={videoUrl}
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

      {/* Button Text */}
      <span className="relative z-20 text-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{label}</span>
    </motion.button>
  );
};

// Demo Component - Example usage
export const VideoButtonDemo = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
      <VideoButton
        label="Watch Our Video"
        videoUrl="https://www.w3schools.com/howto/rain.mp4"
        onClick={() => console.log('Video button clicked!')}
      />
      <VideoButton
        label="Get Started"
        videoUrl="https://www.w3schools.com/howto/rain.mp4"
        onClick={() => console.log('Get started clicked!')}
      />
    </div>
  );
};
