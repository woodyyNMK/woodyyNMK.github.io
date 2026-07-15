import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Building, Calendar, MapPin, Shield, CheckCircle2, ChevronRight, Server, Key, Users } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  const [activeClient, setActiveClient] = useState<string | null>('mandai');

  const clients = [
    {
      id: 'mandai',
      name: 'Mandai',
      type: 'Enterprise On-Prem PAM Deployments',
      focus: 'Secure Privileged Access & Credential Rotation',
      description: 'Supported enterprise CyberArk PAM on-premises deployments by implementing secure privileged access and credential management solutions.',
      bullets: [
        'Designed, developed, tested, and deployed custom CyberArk plugins in production to enable secure connectivity with diverse appliances and automate privileged credential rotation.',
        'Diagnosed, debugged, and resolved production issues directly within client environments, minimizing downtime while maintaining platform stability and security.',
        'Collaborated with client IT teams to provide technical guidance, optimize PAM operations, and promote security best practices for privileged access management.',
        'Ensured compliance with enterprise security policies and privileged access management best practices.'
      ]
    },
    {
      id: 'singtel',
      name: 'Singtel',
      type: 'Enterprise Privilege Cloud PAM Deployment',
      focus: 'CyberArk Privilege Cloud Implementation & Operations',
      description: 'Contributed to the end-to-end implementation of CyberArk Privilege Cloud, from initial deployment and configuration to system onboarding, validation, and operational support.',

      bullets: [
        'Installed and configured mandatory CyberArk Privilege Cloud components, ensuring a secure and stable PAM environment.',
        'Onboarded privileged accounts and target systems into CyberArk, configuring platforms, safes, and access policies according to security requirements.',
        'Conducted end-to-end validation of CPM password management and PSM session management to verify successful onboarding and secure privileged access.',
        'Provided technical knowledge transfer and guidance to client teams on CyberArk architecture, including Vault, Safes, Platforms, Master Policy, CPM, and PSM.',
        'Participated in production support and on-call troubleshooting sessions, working with client teams to diagnose and resolve CyberArk-related issues.'
      ]
    },
    {
      id: 'asm-client',
      name: 'ASM',
      type: 'Identity Orchestration',
      focus: 'Zero-Trust Geolocation Travel Workflow',
      description: 'Architected and deployed a zero-trust identity orchestration solution using CyberArk Identity Flows, integrating ManageEngine MDM, OpenCage Geolocation, and CyberArk EPM to automate secure travel exception workflows.',

      bullets: [
        'Designed and implemented dynamic REST API integrations between ManageEngine MDM, OpenCage Geolocation, and CyberArk EPM to synchronize real-time device location with endpoint security policies.',
        'Engineered 28 automated workflows across interactive, scheduled, and API-driven processes to orchestrate location-based access control and policy enforcement.',
        'Built a data correlation engine that mapped managed mobile devices to enterprise endpoints, ensuring MFA and privilege elevation policies were applied to the correct devices in real time.',
        'Implemented resilient exception handling for offline devices, manual override scenarios, and expired travel exemptions to maintain uninterrupted workflow execution.',
        'Authored the Functional Design Specification (FDS) and Standard Operating Procedures (SOPs), enabling long-term maintainability and streamlined operational support.'
      ]
    },
    {
      id: 'perth-airport',
      name: 'Perth Airport',
      type: 'Identity Lifecycle Integration',
      focus: 'Automated Joiner, Mover, Leaver (JML)',
      description: 'Engineered an automated Joiner, Mover, and Leaver (JML) identity lifecycle solution by integrating CyberArk Identity with Active Directory, Workday, and ServiceNow to streamline enterprise identity provisioning.',

      bullets: [
        'Designed and implemented automated JML workflows for identity provisioning, updates, and deprovisioning across enterprise systems.',
        'Integrated CyberArk Identity with Active Directory, Workday, and ServiceNow to synchronize identity lifecycle events and automate account management.',
        'Developed birthright role assignment logic to provision users with appropriate access based on employment attributes and job roles.',
        'Implemented dynamic username and email generation with intelligent name-collision resolution to ensure unique identities at enterprise scale.',
        'Validated end-to-end identity lifecycle workflows to ensure accurate provisioning, role assignment, and deprovisioning across integrated platforms.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2">
          Work <span className="text-indigo-600">Experience History</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto rounded mb-4" />
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          Showcasing my professional journey, highlighting my contributions, responsibilities, and the technical expertise.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.id}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 relative overflow-hidden shadow-sm"
          >
            {/* Top ambient highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600" />

            {/* Title & Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-600 font-medium">
                  <Building className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{exp.company}</span>
                  <span className="text-slate-300">•</span>
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-500">{exp.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 font-mono text-xs font-semibold whitespace-nowrap self-start">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </div>
            </div>

            {/* Scope of Responsibility */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Core Responsibilities
              </h4>
              {exp.description.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Client Projects Section (Nested specifically for Brillar or extensible in the future) */}
            {exp.id === 'exp-brillar' && (
              <div className="mt-8 pt-8 border-t border-slate-200/80">
                <div className="flex items-start sm:items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-slate-900">Enterprise Client Projects</h4>
                    <p className="text-xs text-slate-500">
                      Select a project to view my work scope, responsibilities, and technical contributions.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  {/* Left Column: Client Buttons */}
                  <div className="md:col-span-4 flex flex-col gap-2">
                    {clients.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveClient(c.id)}
                        className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col gap-1 ${
                          activeClient === c.id
                            ? 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm font-semibold'
                            : 'bg-slate-50 border-slate-100 hover:border-slate-250 text-slate-500 hover:text-slate-850'
                        }`}
                      >
                        <span className="text-xs font-bold truncate">{c.name}</span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 truncate">{c.type}</span>
                      </button>
                    ))}
                  </div>

                  {/* Right Column: Client Details */}
                  <div className="md:col-span-8 bg-slate-50 border border-slate-100 rounded-xl p-5 relative min-h-[200px] flex flex-col justify-between">
                    {clients.map((c) => {
                      if (activeClient !== c.id) return null;
                      return (
                        <motion.div
                          key={c.id}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <div>
                            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 text-[9px] font-mono uppercase font-bold">
                              {c.type}
                            </span>
                            <h5 className="font-display text-sm font-bold text-slate-900 mt-2">{c.focus}</h5>
                          </div>

                          <p className="text-xs text-slate-500 leading-relaxed">
                            {c.description}
                          </p>

                          <div className="space-y-2 border-t border-slate-250/60 pt-4">
                            <h6 className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                              Implementation Blueprint
                            </h6>
                            {c.bullets.map((bullet, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                                <ChevronRight className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Applied */}
            <div className="mt-8 pt-8 border-t border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Applied Competency
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-slate-50 border border-slate-100 text-slate-500 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
