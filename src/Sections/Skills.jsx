import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import {
  FaCode, FaReact, FaServer,
  FaRobot, FaChartBar, FaTools
} from 'react-icons/fa';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const getIconForCategory = (category) => {
    switch(category) {
      case 'Programming Languages':
        return <FaCode className="text-2xl" />;
      case 'Frontend Development':
        return <FaReact className="text-2xl" />;
      case 'Backend Development':
        return <FaServer className="text-2xl" />;
      case 'AI & Machine Learning':
        return <FaRobot className="text-2xl" />;
      case 'Data & Visualization':
        return <FaChartBar className="text-2xl" />;
      case 'Tools & Deployment':
        return <FaTools className="text-2xl" />;
      default:
        return <FaCode className="text-2xl" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-100 rounded-full opacity-30"></div>
        <div className="absolute -bottom-32 -right-16 w-72 h-72 bg-primary-50 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Skills & Expertise
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-secondary-500 mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical skills I've developed throughout my journey in software development and AI engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-hover transition-all border border-gray-100 group"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-500 group-hover:bg-primary-100 transition-colors">
                  {getIconForCategory(skill.category)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {skill.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;