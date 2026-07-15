import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Menu, X, Home, User, Briefcase, Code, Award, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certificates', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="p-1.5 rounded bg-slate-900 text-white">
              <Shield className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-slate-900">
              NAY.SEC
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-indigo-50 border border-indigo-100/50 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}

            {/* Resume Button */}
            <a
              href="./Nay_My_Kyaw_Resume.pdf"
              download="Nay_My_Kyaw_Resume.pdf"
              className="ml-4 px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="./Nay_My_Kyaw_Resume.pdf"
              download="Nay_My_Kyaw_Resume.pdf"
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white flex items-center gap-1.5 cursor-pointer shadow-sm animate-pulse"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-100/60'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
