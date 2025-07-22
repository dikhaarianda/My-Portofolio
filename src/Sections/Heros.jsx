import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import photo from "../assets/Foto-CV.webp"
import MaintenanceModal from "../components/MaintenanceModal";

const Hero = () => {
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);

  const scrollToNextSection = () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    setShowMaintenanceModal(true);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Particle Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between pt-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-8"
        >
          <div className="space-y-2">
            <motion.h2
              className="text-primary-600 text-xl font-medium pl-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Benedictus <span className="text-primary-600">Dikha</span>
            </motion.h1>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 pb-2" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Arianda
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20, width: 0 }}
              animate={{ opacity: 1, y: 0, width: "100px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-primary-500"
            />

            <motion.h3
              className="text-2xl md:text-3xl text-secondary-600 mt-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              AI Engineer & Full Stack Developer
            </motion.h3>
          </div>

          <motion.p
            className="text-lg text-secondary-500 max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Passionate about creating innovative solutions using AI and modern web technologies.
            Specializing in developing intelligent applications that deliver exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 text-white rounded-md font-medium shadow-md hover:bg-primary-700 transition-all flex items-center gap-2 relative overflow-hidden group"
            >
              <span className="relative z-10">Download CV</span>
              <motion.span
                className="absolute inset-0 bg-primary-700 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="https://github.com/dikhaarianda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-800 rounded-md font-medium shadow-soft hover:shadow-hover transition-all border border-gray-100 flex items-center gap-2"
            >
              <FaGithub className="text-lg" /> GitHub Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-5 text-secondary-500 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.a
              href="https://linkedin.com/in/dikhaarianda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              className="text-xl hover:text-blue-600"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/dikhaarianda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#333" }}
              className="text-xl hover:text-gray-800"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="mailto:dikhaarianda@gmail.com"
              whileHover={{ scale: 1.2, color: "#ea4335" }}
              className="text-xl hover:text-red-500"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 mt-16 md:mt-0"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 bg-primary-600 rounded-full blur-2xl opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.15, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <div className="relative bg-gradient-to-tr from-primary-100 to-white p-1 rounded-full shadow-xl">
              <div className="rounded-full overflow-hidden aspect-square bg-white flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 text-secondary-400 font-medium">
                  <img src={photo} alt="Dikha's CV Photo" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Maintenance Modal */}
      <MaintenanceModal
        isOpen={showMaintenanceModal}
        onClose={() => setShowMaintenanceModal(false)}
      />

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 0.5,
          y: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        onClick={scrollToNextSection}
      >
        <div className="flex flex-col items-center text-secondary-500">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <FaArrowDown />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;