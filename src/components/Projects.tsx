import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Github, ExternalLink, Filter, Folder, X, Layers, Cpu, Compass, GraduationCap } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full Stack' | 'Mobile' | 'AI Integrated' | 'University Project'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Full Stack' | 'Mobile' | 'AI Integrated' | 'University Project')[] = [
    'All',
    'Full Stack',
    'Mobile',
    'AI Integrated',
    'University Project'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    return (
      project.category === selectedCategory ||
      project.tags?.includes(selectedCategory as any)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          Featured <span className="text-indigo-600">Software Projects</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          A demonstration of my engineering competency, ranging from deep NLP models to real-time chat transports.
        </p>
      </div>

      {/* Category Filter bar */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-slate-50 border border-slate-100 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white'
              }`}
            >
              {cat === 'All' && <Folder className="w-3.5 h-3.5" />}
              {cat === 'Full Stack' && <Layers className="w-3.5 h-3.5" />}
              {cat === 'Mobile' && <Compass className="w-3.5 h-3.5" />}
              {cat === 'AI Integrated' && <Cpu className="w-3.5 h-3.5" />}
              {cat === 'University Project' && <GraduationCap className="w-3.5 h-3.5" />}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group h-full relative cursor-pointer shadow-sm"
              onClick={() => setSelectedProject(proj)}
            >
              {/* Card Title & Tag */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-100/50 text-indigo-600 font-mono text-[9px] uppercase tracking-wider font-bold">
                      {proj.category}
                    </span>
                    {proj.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-100/50 text-indigo-600 font-mono text-[9px] uppercase tracking-wider font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded text-slate-400 hover:text-indigo-600 transition-colors"
                        onClick={(e) => e.stopPropagation()} // Stop modal from triggering
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Stack badging */}
              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-slate-50 text-slate-500 border border-slate-100 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold">
                      +{proj.techStack.length - 5} MORE
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono font-bold text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read blueprint specs <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 overflow-y-auto max-h-[90vh] shadow-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-600 font-mono text-[10px] uppercase font-bold">
                      {selectedProject.category}
                    </span>
                    {selectedProject.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-600 font-mono text-[10px] uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mt-2">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Overview Specs
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Platform Engineering Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-500 flex items-start gap-2.5 leading-relaxed">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack badges */}
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Technology Manifest
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-slate-50 text-slate-650 border border-slate-100 text-xs font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-6">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
