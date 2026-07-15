import { Project, Experience, Certificate, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Nay Myo Kyaw',
  title: 'Cyber Security Engineer',
  subtitle: 'Computer Science Graduate & IAM/PAM Expert',
  email: 'woodyy.nmk@gmail.com',
  phone: '+66 0614966072',
  location: 'Bangkok, Thailand',
  linkedin: 'linkedin.com/in/woodyy',
  github: 'github.com/woodyyNMK',
  objective: 'Cybersecurity-focused Computer Science graduate with hands-on experience in IAM/PAM (CyberArk), system integration, and enterprise infrastructure support. Experienced in integrating CyberArk solutions within client environments, along with troubleshooting and debugging across Windows and Linux systems. Strong foundation in least-privilege, RBAC, and identity lifecycle management, complemented by knowledge in web security and penetration testing. Highly adaptable, quick to learn, and eager to contribute to secure and scalable systems in real-world environments.',
  education: {
    institution: 'King Mongkut’s University of Technology Thonburi',
    location: 'Bangkok, Thailand',
    degree: 'Bachelor of Science in Computer Science',
    gpax: '3.81',
    period: 'Aug 2022 – May 2026',
    coursework: [
      'Web Developing',
      'Networking',
      'Operating Systems',
      'Security',
      'Artificial Intelligence'
    ]
  },
  additionalInfo: [
    'Enthusiast to learn about new technologies and methodologies.',
    'Possesses strong problem-solving and analytical abilities.',
    'Demonstrates excellent communication and collaboration skills.',
    'Highly adaptable to high-pressure, fast-paced environments.'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-brillar',
    role: 'Cyber Security Engineer',
    company: 'Brillar',
    location: 'Bangkok, Thailand',
    period: 'Feb 2025 – Present',
    description: [
      'Implement and support enterprise-grade CyberArk solutions, unifying Identity Access Management (IAM) and Privileged Access Management (PAM) for diverse clients.',
      'Design and enforce least-privilege Access Control (RBAC), credential rotation, and platform hardening across Windows and Linux server infrastructures.',
      'Create custom Plugins for PSM (Privileged Session Management) and CPM (Central Policy Management) for both thick and thin clients using automation with REST APIs and secure connection components (supporting 12+ different appliance types).',
      'Research Microsoft Security Copilot capabilities and perform agent deployments within isolated test tenant environments to validate AI-driven security orchestration.'
    ],
    highlights: [
      'Supported CyberArk PAM deployments for major enterprise clients, including projects for “Mandai” and “Singtel”, focusing on secure privileged access, platform hardening, and operational optimization.',
      'For “ASM” client: Architected and deployed an automated identity orchestration system using CyberArk Identity Flows, integrating ManageEngine MDM and CyberArk EPM for a zero-trust travel exemption workflow that automated multi-factor authentication enforcement by synchronizing real-time mobile geolocation data with CyberArk EPM policies.',
      'For “Perth Airport” client: Automated the Joiner, Mover, and Leaver (JML) identity lifecycle by engineering workflows for Active Directory provisioning, birthright role assignments, and dynamic name-collision resolution to ensure unique username & email generation at enterprise scale. Successfully integrated these workflows with Workday and ServiceNow.'
    ],
    techStack: ['CyberArk PAM', 'CyberArk EPM', 'Identity Flows', 'Microsoft Security Copilot', 'REST APIs', 'Active Directory', 'ServiceNow', 'ManageEngine MDM', 'Workday', 'Automation']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-tryon',
    title: 'Virtual Clothing Try-on Platform',
    description: 'AI-powered fashion tech system integrating 3D avatar generation, virtual try-on, wardrobe management, and ML-based recommendations.',
    longDescription: 'A comprehensive fashion-tech platform combining mobile capabilities with computer vision and machine learning. Features 3D avatar generation, 2D virtual try-ons, and detailed clothing wardrobe organization. Built dual intelligence recommendation engines including image-based similarity search using InceptionV3, and natural language search powered by Sentence Transformers.',
    category: 'AI Integrated',
    tags: ['University Project', 'Mobile', 'Full Stack'],
    techStack: ['React.js', 'Flutter', 'Flask', 'Node.js', 'MongoDB', 'Firebase Auth', 'InceptionV3', 'Sentence Transformers', 'Gemini API', 'Power BI'],
    highlights: [
      'Built an end-to-end virtual try-on system enabling users to visualize outfits on 2D and fully generated 3D avatars.',
      'Developed wardrobe management allowing users to upload personal clothing items, mix-and-match, and generate try-on images with both owned and vendor clothing.',
      'Engineered image-based similarity matching using InceptionV3 feature extraction.',
      'Implemented text-to-fashion search using Sentence Transformers and cosine similarity.'
    ],
    links: {
      github: 'https://github.com/orgs/StyleVue/repositories'
    }
  },
  {
    id: 'proj-harmoni',
    title: 'HARMONI',
    description: 'A sophisticated conversational AI chatbot utilizing Google Dialogflow & real-time chat socket infrastructure.',
    longDescription: 'Created as a core component of a larger system, HARMONI integrates advanced natural language understanding with a real-time transport layer. It serves as an intelligent agent capable of maintaining context, answering complex client queries, and integrating with backing databases through custom full-stack middleware.',
    category: 'Full Stack',
    tags: ['University Project'],
    techStack: ['TypeScript', 'Node.js', 'Socket.io', 'Express.js', 'Prisma ORM', 'JWT', 'Dialogflow', 'Postman'],
    highlights: [
      'Created a sophisticated chatbot using Google Dialogflow and real-time chat functionality.',
      'Engineered robust authentication using JSON Web Tokens (JWT) and persistent state mapping with Prisma ORM.',
      'Maintained low-latency duplex client-server communication using Socket.io.'
    ],
    links: {
      github: 'https://github.com/orgs/CS23-IntegrateProject-1/repositories'
    }
  },
  {
    id: 'proj-moodlift',
    title: 'MoodLift',
    description: 'Mobile private diary app providing real-time mood analysis, personalized NLP feedback, and dynamic user interfaces.',
    longDescription: 'An emotional well-being mobile application that analyzes diary entries in real-time. It uses natural language processing (NLP) models to score sentiments, provide customized motivational feedback, aggregate emotional statistics, and automatically adjust the application\'s visual interface and ambient audio output to match the user\'s mood.',
    category: 'Mobile',
    tags: ['University Project'],
    techStack: ['Flutter', 'Flask', 'MongoDB', 'Firebase Authentication', 'Hugging Face API', 'NLP', 'Postman'],
    highlights: [
      'Developed private diary system enhancing users’ emotional well-being with real-time mood analysis, feedback, and mood statistics.',
      'Used Natural Language Processing (NLP) to interpret diary entries and adapt the UI accordingly along with acoustic soundscapes.',
      'Integrated securely with Firebase Authentication and persisted sentiment-rich journals in MongoDB.'
    ],
    links: {
      github: 'https://github.com/woodyyNMK/MoodLift'
    }
  },
  {
    id: 'proj-exercise',
    title: 'Exercise Count & Yoga Pose Detection',
    description: 'Real-time computer vision fitness monitoring system using pose-estimation models to track workouts and posture.',
    longDescription: 'A lightweight, high-accuracy desktop application designed for automated exercise counting and yoga posture assessment. Using advanced keypoint tracking models, it accurately logs counts for high-intensity exercises and monitors holding durations for complex yoga poses with real-time audio and visual feedback.',
    category: 'AI Integrated',
    tags: ['University Project'],
    techStack: ['Python', 'tkinter', 'YOLOv8 Pose', 'MediaPipe', 'Google Colab'],
    highlights: [
      'Engineered a fitness monitoring system using body pose-estimation to count repetitions of exercises (push-ups, jumping-jacks, curl-ups, squats).',
      'Tracked holding durations of specific Yoga poses (tree, triangle, easy seat, child) with high geometric precision.',
      'Built a lightweight, responsive desktop UI utilizing Python’s tkinter combined with asynchronous camera frame processing.'
    ],
    links: {
      github: 'https://github.com/woodyyNMK/Exercise-Yoga-Detection-YOLOv8'
    }
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert-cyberark',
    title: 'CyberArk Defender - PAM',
    issuer: 'CyberArk',
    date: 'April 2026',
    credentialUrl: 'https://training.cyberark.com/share/gamification/badges/external/20b6da0f-2cfb-4559-9f9a-5f9f06cf1476?lang=en',
    badgeColor: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'cert-iso',
    title: 'ISO/IEC 27001:2022 Information Security Associate',
    issuer: 'SkillFront',
    date: 'Dec 2024',
    credentialId: '99188785568707',
    credentialUrl: 'https://www.skillfront.com/Badges/99188785568707',
    badgeColor: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'cert-cc',
    title: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    date: 'Nov 2024',
    credentialId: '1998144',
    credentialUrl: 'https://www.credly.com/badges/cb636f65-8838-41c7-9244-39de19456129/linked_in_profile',
    badgeColor: 'from-purple-600 to-violet-700'
  },
  {
    id: 'cert-eccppt',
    title: 'Certified Professional Penetration Tester (eCPPTv2)',
    issuer: 'eLearn Security',
    date: 'July 2024',
    credentialId: '109278859',
    credentialUrl: 'https://certs.ine.com/e86d38c8-3daa-4cdc-ba28-2f7b9e78ac94#acc.IX6ObRVD',
    badgeColor: 'from-rose-600 to-red-700'
  },
  {
    id: 'cert-googleit',
    title: 'Google IT Support Specialization',
    issuer: 'Google',
    date: 'Feb 2024',
    credentialId: 'LLP69YGMRASQ',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/LLP69YGMRASQ',
    badgeColor: 'from-amber-500 to-orange-600'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    category: 'languages',
    skills: [
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Python', level: 'Expert' },
      { name: 'Java', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Bash', level: 'Advanced' },
      { name: 'Dart', level: 'Intermediate' },
      { name: 'PHP', level: 'Intermediate' }
    ]
  },
  {
    title: 'IAM & PAM Systems',
    category: 'systems',
    skills: [
      { name: 'CyberArk PAM', level: 'Expert' },
      { name: 'CyberArk EPM', level: 'Expert' },
      { name: 'CyberArk Identity Flows', level: 'Expert' },
      { name: 'Active Directory', level: 'Expert' },
      { name: 'Least-Privilege & RBAC', level: 'Expert' },
      { name: 'Identity Lifecycle (JML)', level: 'Expert' }
    ]
  },
  {
    title: 'Tools & Security',
    category: 'tools',
    skills: [
      { name: 'Burp Suite Enterprise', level: 'Advanced' },
      { name: 'Nessus Enterprise', level: 'Advanced' },
      { name: 'Docker', level: 'Advanced' },
      { name: 'Postman & RestAPI', level: 'Expert' },
      { name: 'Git', level: 'Expert' },
      { name: 'Jenkins', level: 'Intermediate' }
    ]
  },
  {
    title: 'Operating Systems & Misc',
    category: 'systems',
    skills: [
      { name: 'Linux (Ubuntu/Debian/CentOS)', level: 'Expert' },
      { name: 'Windows Server', level: 'Expert' },
      { name: 'English (Fluent)', level: 'Advanced' },
      { name: 'Burmese (Native)', level: 'Expert' }
    ]
  }
];
