import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaUserGraduate, FaBriefcase } from 'react-icons/fa';
import photo from "../assets/Foto-LinkedIn.webp"
import MaintenanceModal from "../components/MaintenanceModal";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  const handleDownloadCV = (e) => {
    e.preventDefault();
    setShowMaintenanceModal(true);
  };

  return (
    <section id="about" className="py-24 bg-white px-4 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-50 rounded-tr-full opacity-30 -z-10"></div>

      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            About Me
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-xl p-10 shadow-soft hover:shadow-hover transition-all border border-gray-100"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center shadow-soft">
                  <img src={photo} alt="Dikha's LinkedIn Photo" />
                </div>
              </div>

              <div className="md:w-2/3 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">AI Engineer & Full Stack Developer</h3>

                <p className="text-lg text-secondary-600 leading-relaxed">
                  I'm passionate about creating innovative solutions at the intersection of artificial intelligence and web development.
                  With expertise in both AI algorithms and modern web frameworks, I specialize in building intelligent applications
                  that deliver exceptional user experiences.
                </p>

                <p className="text-lg text-secondary-600 leading-relaxed">
                  My approach combines technical excellence with creative problem-solving, enabling me to develop
                  cutting-edge solutions that address real-world challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <FaUserGraduate />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Degree</h4>
                      <p className="text-secondary-500">Bachelor of Computer Science</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Experience</h4>
                      <p className="text-secondary-500">AI & Web Development</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Location</h4>
                      <p className="text-secondary-500">Bekasi, Indonesia</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a
                        href="mailto:dikhaarianda@gmail.com"
                        className="text-secondary-500 hover:text-primary-600 transition-colors"
                      >
                        dikhaarianda@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="pt-4">
                  <motion.a
                    onClick={handleDownloadCV}
                    // href="/assets/dikha-cv.pdf"
                    // download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block px-6 py-3 bg-primary-600 text-white rounded-md font-medium shadow-md hover:bg-primary-700 transition-all"
                  >
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Maintenance Modal */}
      <MaintenanceModal
        isOpen={showMaintenanceModal}
        onClose={() => setShowMaintenanceModal(false)}
      />
    </section>
  );
};

export default About;