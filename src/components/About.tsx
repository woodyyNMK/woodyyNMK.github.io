import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, ShieldCheck, Heart, Award, Cpu, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data';

export default function About() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'Development' | 'DevOps & Infrastructure' | 'Security' | 'Languages & Communication'>('all');
  const [imageError, setImageError] = useState(false);

  // Filter skills based on chosen category
  const filteredSkills = SKILL_CATEGORIES.filter(
    (cat) => activeSkillCategory === 'all' || cat.category === activeSkillCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          About <span className="text-indigo-600">ME</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          A deeper look into my technical objective, academic foundation, and skill blueprint.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Objective & Academic Details */}
        <div className="lg:col-span-7 space-y-8">
          {/* Introduction Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-b from-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Photo Column */}
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="relative group w-32 h-32 sm:w-40 sm:h-40">
                  {/* Glowing cyber security ring orbit */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
                  
                  {/* Outer security rings */}
                  <div className="absolute -inset-1.5 rounded-full border border-dashed border-indigo-400/40 animate-[spin_25s_linear_infinite]" />
                  <div className="absolute -inset-1 rounded-full border border-indigo-500/20" />
                  
                  {/* Main circular card */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-50 flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src="./pf.jpg"
                        alt="Nay Myo Kyaw Profile"
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-180"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 flex flex-col items-center justify-center text-white relative shadow-inner">
                        {/* Futuristic grid mesh background */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />
                        <User className="w-10 h-10 text-white/90 drop-shadow-sm mb-1" />
                        <span className="font-display text-base font-extrabold tracking-wider text-white">NMK</span>
                        <span className="text-[9px] font-mono uppercase bg-black/20 px-2 py-0.5 rounded-full text-indigo-200 mt-1">
                          Security Eng
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900">
                      Nay Myo Kyaw
                    </h3>
                    <p className="text-indigo-600 text-xs font-mono font-bold uppercase tracking-wider mt-0.5">
                      Security Engineer @ Brillar • CS Graduate
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-slate-650 text-sm sm:text-base leading-relaxed font-sans">
                  <p>
                    My professional experience focuses on <strong className="font-semibold text-slate-900">CyberArk Identity and Privileged Access Management (IAM & PAM)</strong>, where I help design, build, implement, and automate secure identity solutions for enterprise environments. Integrating these robust solutions across diverse client infrastructures has made me highly proficient in <strong className="font-semibold text-slate-900">cross-system troubleshooting</strong>, debugging complex environment integrations, and configuring secure federation protocols such as <strong className="font-semibold text-slate-900">SAML</strong> and <strong className="font-semibold text-slate-900">Single Sign-On (SSO)</strong>.
                  </p>
                  <p>
                    During my Computer Science studies, I developed a strong foundation in full-stack software development while independently exploring cybersecurity through self-learning. I gained hands-on experience in <strong className="font-semibold text-slate-900">web security, system security, and penetration testing</strong>, which deepened my understanding of how applications and infrastructure work from both the developer's and the security engineer's perspectives.
                  </p>
                  <p>
                    I'm currently expanding my expertise into <strong className="font-semibold text-slate-900">DevOps and cloud technologies</strong>, with the long-term goal of becoming a <strong className="font-semibold text-slate-900">Cloud Solutions Architect</strong>. I believe that understanding the complete software lifecycle—from development and automation to infrastructure and security—enables me to build solutions that are secure, scalable, and reliable.
                  </p>
                  <p>
                    What drives me most is my <strong className="font-semibold text-slate-900">curiosity and resilience</strong>. I genuinely enjoy learning new technologies, experimenting with different tools, and continuously challenging myself. I'm a fast learner who adapts quickly to unfamiliar technologies, and I thrive in environments where I can solve complex problems while constantly expanding my knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/40 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded bg-indigo-50 text-indigo-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">Academic Foundation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h4 className="text-base font-bold text-slate-850">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0 w-fit font-semibold">
                    {PERSONAL_INFO.education.gpax} GPAX
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-600">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {PERSONAL_INFO.education.period} | {PERSONAL_INFO.education.location}
                </p>
              </div>

              {/* Coursework Badge List */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  Key Coursework Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 border border-slate-100 text-slate-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skill Blueprint Area */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded bg-indigo-50 text-indigo-600">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">Technical Skills Blueprint</h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5 mb-6 bg-slate-50 p-1 rounded-xl border border-slate-100">
              {(['all', ...SKILL_CATEGORIES.map(cat => cat.category)] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold capitalize transition-all duration-200 cursor-pointer ${
                    activeSkillCategory === cat
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>

            {/* Skills Sub-Grids */}
            <div className="space-y-6">
              {filteredSkills.map((category, catIdx) => (
                <div key={catIdx} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="p-2.5 rounded-lg bg-slate-50/50 border border-slate-100 flex items-center justify-between group hover:border-indigo-100 transition-colors"
                      >
                        <span className="text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors truncate pr-1">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded shrink-0 font-bold ${
                            skill.level === 'Experienced'
                              ? 'bg-emerald-50/50 text-emerald-600 border border-emerald-100/30'
                              : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
