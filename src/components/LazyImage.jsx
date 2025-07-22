import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className = '', placeholder = '/porto-favicon.png' }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setImageSrc(src);
              setIsLoading(false);
            };
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      <motion.img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0.7 : 1 }}
        transition={{ duration: 0.3 }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
