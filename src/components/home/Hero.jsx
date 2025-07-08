import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  // Fixed values since no props are passed
  const mediaSrc = 'https://videos.pexels.com/video-files/30290435/12984761_1920_1080_25fps.mp4';
  const bgImageSrc = 'https://images.pexels.com/photos/5070054/pexels-photo-5070054.jpeg';
  const title = 'BRAND OF TALENT';
  const subtitle = 'El talento que tu marca necesita';

  useEffect(() => {
    setScrollProgress(0);
    setMediaFullyExpanded(false);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      const touchCurrentY = e.touches[0].clientY;
      const touchDelta = (touchStartY - touchCurrentY) * 0.0008; // Reduced sensitivity
      
      if (!mediaFullyExpanded) {
        e.preventDefault();
        const newProgress = Math.min(
          Math.max(scrollProgress + touchDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
        }
      } else if (mediaFullyExpanded && touchDelta < 0) {
        // Allow going back when swiping up while expanded
        e.preventDefault();
        const regressProgress = Math.min(Math.max(1 + touchDelta * 2, 0), 1);
        setScrollProgress(regressProgress);
        
        if (regressProgress < 0.95) {
          setMediaFullyExpanded(false);
        }
      }
    };

    const handleTouchEnd = (e) => {
      setTouchEndY(e.changedTouches[0].clientY);
      
      // Reset touch positions
      setTouchStartY(0);
      setTouchEndY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    // Desktop events
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    // Mobile events
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, touchEndY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Calculate media size to expand to full screen
  const initialWidth = isMobileState ? 280 : 300;
  const initialHeight = isMobileState ? 320 : 400;
  const mediaWidth = initialWidth + scrollProgress * (window.innerWidth - initialWidth);
  const mediaHeight = initialHeight + scrollProgress * (window.innerHeight - initialHeight);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title.split(' ')[0];
  const restOfTitle = title.split(' ').slice(1).join(' ');

  return (
    <section className='relative flex items-center justify-center min-h-screen w-full overflow-hidden'>
      {/* Background */}
      <motion.div
        className='absolute inset-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 - scrollProgress }}
        transition={{ duration: 0.1 }}
      >
        <img
          src={bgImageSrc}
          alt='Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/10' />
      </motion.div>

      {/* Video Container */}
      <div
        className='relative z-10 flex items-center justify-center'
        style={{
          width: `${mediaWidth}px`,
          height: `${mediaHeight}px`,
          borderRadius: scrollProgress > 0.9 ? '0px' : '16px',
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
          transition: 'border-radius 0.3s ease',
          transform: isMobileState ? 'translateY(-10px)' : 'translateY(0px)',
        }}
      >
        <div className='relative w-full h-full'>
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className='w-full h-full object-cover'
            style={{ borderRadius: scrollProgress > 0.9 ? '0px' : '12px' }}
            controls={false}
          />
          <motion.div
            className='absolute inset-0 bg-black/20'
            style={{ borderRadius: scrollProgress > 0.9 ? '0px' : '12px' }}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0.4 - scrollProgress * 0.3 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </div>

      {/* Title Text */}
      <div className='absolute inset-0 flex items-center justify-center z-20 pointer-events-none'>
        <div className='text-center' style={{ 
          transform: isMobileState ? 'translateY(-10px)' : 'translateY(0px)' 
        }}>
          <motion.h1
            className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2'
            style={{ transform: `translateX(-${textTranslateX}vw)` }}
          >
            {firstWord}
          </motion.h1>
          <motion.h1
            className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white'
            style={{ transform: `translateX(${textTranslateX}vw)` }}
          >
            {restOfTitle}
          </motion.h1>
        </div>
      </div>

      {/* Subtitle Text */}
      <div 
        className='absolute z-20 flex flex-col items-center text-center gap-2 pointer-events-none'
        style={{
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) translateY(${(mediaHeight/2) + (isMobileState ? 40 : 60)}px)`,
        }}
      >
        <motion.p
          className='text-base md:text-lg lg:text-xl text-white/90 px-2'
          style={{ transform: `translateX(-${textTranslateX}vw)` }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero; 