import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Check, Copy, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copiedType, setCopiedType] = useState<'email' | 'whatsapp' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'whatsapp') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          Feel free to reach out via email, phone, or professional networks. I am always open to discussing new opportunities.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Card: Direct connections */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 space-y-6 shadow-sm">
          <h3 className="font-display text-lg font-bold text-slate-900">Direct Connections</h3>

          {/* Email contact block */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-indigo-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-indigo-50 text-indigo-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Email Address</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="p-2 rounded hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp contact block */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-indigo-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-indigo-50 text-indigo-600">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">WhatsApp</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-700">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'whatsapp')}
              className="p-2 rounded hover:bg-slate-100 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copiedType === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location contact block */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
            <div className="p-2 rounded bg-rose-50 text-rose-550">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Geographic Base</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Social Links Cards */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-sm">
          <a
            href={`https://${PERSONAL_INFO.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 text-slate-500 hover:text-indigo-600 hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold group cursor-pointer"
          >
            <Linkedin className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
            LinkedIn Profile
          </a>

          <a
            href={`https://${PERSONAL_INFO.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 text-slate-500 hover:text-indigo-600 hover:shadow-sm transition-all duration-300 flex items-center justify-center gap-2 text-sm font-semibold group cursor-pointer"
          >
            <Github className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
            GitHub Projects
          </a>
        </div>

        {/* Map mockup */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 overflow-hidden relative h-48 flex items-center justify-center shadow-sm">
          {/* Grid styling */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-40 pointer-events-none" />
          
          {/* Ambient visual marker */}
          <div className="relative z-10 text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-mono text-indigo-600 font-bold">
              <MapPin className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              BANGKOK, THAILAND
            </div>
            <p className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Active timezone: GMT+7</p>
          </div>
          
          {/* Radial glow around marker */}
          <div className="absolute w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
