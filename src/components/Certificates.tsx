import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Check, Calendar, ExternalLink, Key } from 'lucide-react';
import { CERTIFICATES } from '../data';

export default function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          Professional <span className="text-indigo-600">Certifications</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          Industry-verified qualifications certifying expertise in privileged access, systems security, and penetration testing. Future additions to this list will also include certifications related to DevOps and cloud technologies.
        </p>
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => {
          return (
            <div
              key={cert.id}
              className="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-sm"
            >
              {/* Top linear glow badge indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600" />

              <div className="space-y-4">
                {/* Badge Issuer & Date */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 text-[10px] font-mono text-slate-500 uppercase border border-slate-100 font-bold">
                    {cert.issuer === 'CyberArk' ? <Key className="w-3 h-3 text-indigo-600" /> : <ShieldCheck className="w-3 h-3 text-indigo-600" />}
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 font-mono text-[10px] text-slate-500 flex items-center justify-between">
                    <span>Credential ID:</span>
                    <span className="text-slate-800 font-bold tracking-wider">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Action Link */}
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500" /> VERIFIED BADGE
                </span>
                
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                  >
                    Verify
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
