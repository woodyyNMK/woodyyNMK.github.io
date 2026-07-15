import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Github, Linkedin, Mail, Cpu, Terminal, Key, Database, Bug, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  // Quick status highlights
  const statusBadges = [
    { icon: GraduationCap, label: 'B.Sc Computer Science @ KMUTT' },
    { icon: Shield, label: 'CyberArk Defender' },
    { icon: Bug, label: 'eCPPTv2' },
    { icon: Award, label: 'ISC2 CC' },
  ];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Soft Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-50/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-slate-900"
        >
          Hi, I am <span className="text-indigo-600 font-extrabold">{PERSONAL_INFO.name}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-slate-600 font-medium max-w-2xl mb-4 font-display"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-slate-600 max-w-3xl mb-8 leading-relaxed font-sans italic relative px-6"
        >
          <span className="text-3xl text-indigo-200 font-serif absolute -top-4 left-0 select-none">“</span>
          Driven by <span className="text-indigo-600 font-semibold not-italic">curiosity</span> and defined by <span className="text-indigo-600 font-semibold not-italic">resilience</span>: Securing enterprise identities today, while engineering scalable, automated cloud architectures for tomorrow.
          <span className="text-3xl text-indigo-200 font-serif absolute -bottom-8 right-4 select-none">”</span>
        </motion.p>

        {/* Stat Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 w-full max-w-4xl mb-10"
        >
          {statusBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-indigo-200 hover:bg-white transition-all duration-300 group shadow-sm shrink-0"
              >
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left font-mono text-xs font-semibold text-slate-600 tracking-wide whitespace-nowrap">
                  {badge.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 mb-12 w-full justify-center px-4"
        >
          <button
            onClick={() => setActiveTab('projects')}
            className="px-6 py-3 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold hover:bg-indigo-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </button>
        </motion.div>

        {/* Social / Direct Contacts Quick Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6 border-t border-slate-100 pt-8 w-full max-w-xl justify-center text-slate-400"
        >
          <a
            href={`https://${PERSONAL_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="text-slate-200">|</span>
          <a
            href={`https://${PERSONAL_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-slate-200">|</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 text-xs font-mono font-medium"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}
