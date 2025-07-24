import { motion } from 'framer-motion';
import { education, certifications, achievements } from '../data/projects';
import {
  FaCertificate,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaTrophy
} from 'react-icons/fa';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-gray-50 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-50 rounded-full opacity-30 transform rotate-12"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-50 rounded-full opacity-30 transform -rotate-12"></div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Education & Certifications
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-secondary-500 mt-4 max-w-2xl mx-auto">
            My academic background and professional certifications in software development and AI.
          </p>
        </motion.div>

        {/* Grid: Education & Achievements */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800 border-b border-gray-200 pb-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                <FaGraduationCap />
              </div>
              Education
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 relative"
            >
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gray-200 z-0"></div>

              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative z-10"
                >
                  <div className="flex gap-8">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary-500"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-all border border-gray-100 flex-1">
                      <h4 className="text-xl font-bold text-gray-800">{edu.institution}</h4>
                      <p className="text-primary-600 font-medium mt-1">{edu.degree}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                        <div className="flex items-center text-secondary-600">
                          <FaCalendarAlt className="mr-2 text-secondary-400" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center text-secondary-600">
                          <FaMapMarkerAlt className="mr-2 text-secondary-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="mt-3 text-secondary-500 bg-gray-50 p-3 rounded-lg">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800 border-b border-gray-200 pb-3"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                <FaTrophy />
              </div>
              Achievements
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all border border-gray-100 relative overflow-hidden w-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-2 h-20 bg-primary-50 rounded-full transform translate-x-10 -translate-y-10"></div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                      <FaTrophy size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 relative z-10">{achievement.title}</h4>
                      <p className="text-primary-600 font-medium">{achievement.issuer}</p>
                    </div>
                  </div>

                  <div className="pl-16 border-l border-gray-100 ml-6">
                    <div className="flex items-center text-secondary-600 mb-2">
                      <FaCalendarAlt className="mr-2 text-secondary-400" size={16} />
                      <span className="font-medium">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-secondary-600">
                      Patent ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{achievement.credential}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800 border-b border-gray-200 pb-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
              <FaCertificate />
            </div>
            Certifications
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all border border-gray-100 relative overflow-hidden w-full"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-2 h-20 bg-primary-50 rounded-full transform translate-x-10 -translate-y-10"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                    <FaAward size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 relative z-10">{cert.title}</h4>
                    <p className="text-primary-600 font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="pl-16 border-l border-gray-100 ml-6">
                  <div className="flex items-center text-secondary-600 mb-2">
                    <FaCalendarAlt className="mr-2 text-secondary-400" size={16} />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <p className="text-sm text-secondary-600">
                    Credential ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{cert.credential}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;