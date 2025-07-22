import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.featured);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-white px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-radial from-primary-50 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-primary-50 to-transparent opacity-70"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Projects
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="text-secondary-500 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, AI applications, and full-stack projects.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-lg">
            <motion.button
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setFilter('all')}
              whileHover={filter !== 'all' ? { scale: 1.05 } : {}}
              whileTap={filter !== 'all' ? { scale: 0.95 } : {}}
            >
              All Projects
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-transparent text-gray-600 hover:text-primary-600'
              }`}
              onClick={() => setFilter('featured')}
              whileHover={filter !== 'featured' ? { scale: 1.05 } : {}}
              whileTap={filter !== 'featured' ? { scale: 0.95 } : {}}
            >
              Featured
            </motion.button>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all border border-gray-100"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -5 }}
              >
                <div className="h-52 relative overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <img src={project.image} alt="Project-Image" />
                  </div>

                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary-900 bg-opacity-70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-600"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaSearch size={20} />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-primary-600 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-secondary-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1.5 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center gap-2"
                      whileHover={{ x: 3 }}
                    >
                      <FaGithub /> GitHub
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/dikhaarianda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md font-medium transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;