import { motion } from 'framer-motion';
import { education, certifications } from '../data/projects';
import { FaCertificate, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Section */}
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
              {/* Timeline line */}
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gray-200 z-0"></div>
              
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative z-10"
                >
                  <div className="flex gap-8">
                    {/* Timeline dot */}
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
          
          {/* Certifications Section */}
          <div>
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
                  className="bg-white p-6 rounded-xl shadow-soft hover:shadow-hover transition-all border border-gray-100 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-50 rounded-full transform translate-x-10 -translate-y-10"></div>
                  
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0 mt-1">
                      <FaAward />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 relative z-10">{cert.title}</h4>
                      <p className="text-primary-600">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="pl-12 border-l border-gray-100 ml-5">
                    <div className="flex items-center text-secondary-600 mb-1">
                      <FaCalendarAlt className="mr-2 text-secondary-400" size={14} />
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-sm text-secondary-500">
                      Credential ID: <span className="font-medium">{cert.credential}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;