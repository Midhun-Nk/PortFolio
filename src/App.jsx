import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
// Icons for UI
import { 
  Github, Linkedin, Instagram, ExternalLink, 
  ArrowUpRight, Globe, Database, Briefcase, 
  Layout, MapPin, ArrowRight, User, Award, Twitter,
  Smartphone, Video, Monitor, X, Play, Link as LinkIcon, 
  Terminal, Cpu, Code2
} from 'lucide-react';

// Icons for Tech Stack
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiDjango, SiFlutter, SiDart, 
  SiFirebase, SiMongodb, SiPostgresql, SiLeetcode, 
  SiExpress, SiFastapi, SiSupabase, SiMysql, SiTypescript
} from 'react-icons/si';

// --- IMAGE IMPORTS (Placeholders) ---
import djangodrf from './assets/certificate/djangodrf.png';
import dsa from './assets/certificate/dsa.png';
import fullstack from './assets/certificate/fullstack.png';
import hackthon from './assets/certificate/hackthon.png';
import internship from './assets/certificate/internship.png';
import python_django from './assets/certificate/python_django.png';
import responsive from './assets/certificate/responsive.png';
import sql from './assets/certificate/sql.png';
// ... import others

// --- DATA: PROJECTS ---
const PROJECTS = [
  { 
      id: 1,
      title: "Disaster Response", 
      desc: "Offline-first coordination app.",
      longDesc: "A critical tool for emergency responders operating in areas with compromised connectivity. It uses peer-to-peer mesh networking to sync data when back online. Built with a focus on battery optimization and low-latency data transfer.",
      stack: ["Flutter", "Firebase", "Google Maps API", "Dart"],
      color: "bg-blue-600",
      github: "https://github.com",
      live: "https://demo.com"
  },
  { 
      id: 2,
      title: "E-Commerce Nursery", 
      desc: "Full-stack plant marketplace.",
      longDesc: "A scalable marketplace for plant nurseries featuring real-time inventory management, Stripe payment gateway integration, and an admin dashboard for analytics. Optimized for SEO and fast load times.",
      stack: ["MERN Stack", "Redux Toolkit", "Stripe", "AWS S3"],
      color: "bg-green-600",
      github: "https://github.com",
      live: "https://demo.com"
  },
  { 
      id: 3,
      title: "Collab Code Editor", 
      desc: "Real-time pair programming.",
      longDesc: "A browser-based IDE allowing multiple developers to edit code simultaneously. Features syntax highlighting, chat, and room management using WebSockets for sub-millisecond latency.",
      stack: ["React", "Socket.io", "Node.js", "Express"],
      color: "bg-purple-600",
      github: "https://github.com",
      live: "https://demo.com"
  },
  { 
      id: 4,
      title: "ATS Resume Builder", 
      desc: "AI-driven resume optimization.",
      longDesc: "An AI tool that analyzes job descriptions and tailors resumes automatically. It uses OpenAI's GPT-4 API to generate keyword-optimized content to pass ATS filters with a high success rate.",
      stack: ["Next.js", "Django", "OpenAI API", "PostgreSQL"],
      color: "bg-orange-600",
      github: "https://github.com",
      live: "https://demo.com"
  },
  { 
      id: 5,
      title: "Blood Donation Net", 
      desc: "Donor bridging network.",
      longDesc: "A location-based service connecting blood donors with hospitals in real-time. Features push notifications for urgent requirements, donor history tracking, and privacy-focused profile management.",
      stack: ["Django", "React Native", "Celery", "Redis"],
      color: "bg-red-600",
      github: "https://github.com",
      live: "https://demo.com"
  }
];

// --- DATA: CERTIFICATES ---
const CERTIFICATES = [
  { 
    title: "Python & Django Full Stack", 
    issuer: "Udemy", 
    date: "2025", 
    image: python_django 
  },
  { 
    title: "Data Structures & Algorithms in Python", 
    issuer: "Udemy", 
    date: "2025",
    image: dsa 
  },
  { 
    title: "Hackathon Participant", 
    issuer: "Hack4Good", 
    date: "2024",
    image: hackthon 
  },
  { 
    title: "Responsive Web Design", 
    issuer: "freeCodeCamp", 
    date: "2024",
    image: responsive
  },
   { 
    title: "Python Internship", 
    issuer: "ReverTech IT Solutions", 
    date: "2023",
    image: internship
  },
   { 
    title: "MERN Stack Training", 
    issuer: "Edunet Foundation", 
    date: "2025",
    image: fullstack
  },
   { 
    title: "introdution to SQL", 
    issuer: "Skillup", 
    date: "2024",
    image: sql
  },
   { 
    title: "Python Django Rest Api", 
    issuer: "Udemy", 
    date: "2025",
    image: djangodrf
  }
];

// --- TECH STACK ---
const TECH_CATEGORIES = {
  "Frontend": [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#ffffff" },
    { name: "Django", icon: <SiDjango />, color: "#092E20" },
    { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
  ],
  "Mobile": [
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    { name: "Dart", icon: <SiDart />, color: "#0175C2" },
    { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  ],
  "DevOps & Tools": [
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  ]
};

// --- ANIMATION CONFIG ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const viewportConfig = { once: false, amount: 0.2 }; 

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Background & Header */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#172554,transparent)] opacity-20"></div>
      </div>

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-bold text-white text-sm tracking-tighter">MN</div>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-white">MIDHUN.NK</span>
                <span className="text-[10px] text-gray-500 font-mono">KERALA_IN</span>
             </div>
          </div>
          <nav className="hidden md:flex gap-8 text-xs font-medium tracking-widest text-gray-400">
             {['INDEX', 'ABOUT', 'STACK', 'PROJECTS', 'CERTIFICATES', 'HISTORY'].map((item) => (
               <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
             ))}
          </nav>
          <a href="#contact" className="text-xs font-mono border border-white/10 px-4 py-2 hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> AVAILABLE
          </a>
        </div>
      </motion.header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Index/Hero Section */}
        <motion.section 
          id="index"
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="min-h-[75vh] flex flex-col justify-center border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-widest border border-blue-500/20 bg-blue-500/5 px-3 py-1 w-fit">
            Hello World, I'm
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.05]">
            Midhun NK <br/>
            <span className="text-gray-600">Full Stack Engineer.</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="grid md:grid-cols-12 gap-8 items-start">
             <p className="md:col-span-6 text-xl text-gray-400 leading-relaxed font-light">
               I engineer scalable web and mobile applications from <strong className="text-white">Kerala, India</strong>.
               Specializing in <strong className="text-white">MERN</strong>, <strong className="text-white">Django</strong>, and <strong className="text-white">Flutter</strong>.
             </p>
             <div className="md:col-span-6 flex gap-4 md:justify-end">
                <a href="#projects" className="px-8 py-4 bg-white text-black font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2 group">
                  View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </a>
                <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                  Contact
                </a>
             </div>
          </motion.div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-medium">About & Services</h2>
            <span className="font-mono text-xs text-gray-500">[ PROFILE ]</span>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp} className="space-y-6 text-gray-400 leading-relaxed">
              <p>I am a B.Tech Computer Science graduate based in <strong>Moodadi, Kerala</strong>. My journey into development started with a simple curiosity for how things work, which has since evolved into a dedicated pursuit of building efficient digital infrastructure.</p>
              <div className="flex gap-4 pt-4">
                 <div className="flex items-center gap-2 text-sm font-mono text-white"><MapPin size={16} className="text-blue-500"/> Kerala, India</div>
                 <div className="flex items-center gap-2 text-sm font-mono text-white"><Globe size={16} className="text-blue-500"/> Remote / Hybrid</div>
              </div>
            </motion.div>
            <div className="space-y-4">
               <motion.div variants={fadeInUp} className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">Services I Offer</motion.div>
               <motion.div variants={fadeInUp} className="group border border-white/10 bg-[#0f0f0f] p-5 hover:border-blue-500/50 transition-colors flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors"><Monitor size={20} /></div>
                  <div><h3 className="text-white font-medium mb-1">Web Development</h3><p className="text-sm text-gray-500">MERN Stack, React, Next.js</p></div>
               </motion.div>
               <motion.div variants={fadeInUp} className="group border border-white/10 bg-[#0f0f0f] p-5 hover:border-green-500/50 transition-colors flex items-start gap-4">
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors"><Smartphone size={20} /></div>
                  <div><h3 className="text-white font-medium mb-1">App Development</h3><p className="text-sm text-gray-500">Flutter, Dart, React Native</p></div>
               </motion.div>
               <motion.div variants={fadeInUp} className="group border border-white/10 bg-[#0f0f0f] p-5 hover:border-purple-500/50 transition-colors flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors"><Video size={20} /></div>
                  <div><h3 className="text-white font-medium mb-1">Content Creation</h3><p className="text-sm text-gray-500">Technical tutorials, coding devlogs.</p></div>
               </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stack Section */}
        <motion.section 
          id="stack" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-medium">Technical Specification</h2>
            <span className="font-mono text-xs text-gray-500">[ MODULES ]</span>
          </motion.div>
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-custom">
              {Object.keys(TECH_CATEGORIES).map((cat) => (
                <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-2 rounded-full text-sm font-mono whitespace-nowrap transition-colors border ${activeTab === cat ? 'bg-white text-black border-white' : 'bg-transparent text-gray-500 border-white/10'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <AnimatePresence mode='wait'>
                {TECH_CATEGORIES[activeTab].map((tech) => (
                  <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-4">
             {Object.values(TECH_CATEGORIES).flat().map((tech) => (
                <TechCard key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
             ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-medium">Featured Deployments</h2>
            {/* <span className="font-mono text-xs text-gray-500">[2023 — 2026]</span> */}
          </motion.div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
          <div className="md:hidden">
             <MobileSwipeSlider items={PROJECTS} renderItem={(project) => <ProjectCard project={project} onClick={() => setSelectedProject(project)} />} />
          </div>
        </motion.section>

        {/* Certificates Section */}
        <motion.section 
          id="certificates" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-medium">Certifications</h2>
            <span className="font-mono text-xs text-gray-500">[ CREDENTIALS ]</span>
          </motion.div>
          <div className="hidden md:grid md:grid-cols-3 gap-6">
             {CERTIFICATES.map((cert, i) => (
                <CertificateCard key={i} cert={cert} />
             ))}
          </div>
          <div className="md:hidden">
             <MobileSwipeSlider items={CERTIFICATES} renderItem={(cert) => <CertificateCard cert={cert} />} />
          </div>
        </motion.section>

        {/* History Section */}
        <motion.section 
          id="history" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 border-b border-white/10"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-medium">Career Trajectory</h2>
            <span className="font-mono text-xs text-gray-500">[ HISTORY ]</span>
          </motion.div>
          <div className="max-w-3xl">
             {[
                { role: "Full Stack Developer", time: "Current", company: "Entrike InfoTech", desc: "Architecting scalable web & mobile solutions." },
                { role: "Full Stack Trainee", time: "July — October", company: "Edunet foundation", desc: "Undergoing intensive training in full stack development." },
                { role: "Freelance Developer", time: "2024", company: "", desc: "Building custom web applications for college projects." }
             ].map((job, i) => (
                 <motion.div key={i} variants={fadeInUp} className="relative pl-12 pb-12 last:pb-0 border-l border-white/10">
                    <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[#0a0a0a] border border-blue-500 rounded-full"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <span className="hidden sm:block text-gray-600">•</span>
                        <span className="text-sm font-mono text-blue-400">{job.time}</span>
                    </div>
                    <div className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">{job.company}</div>
                    <p className="text-gray-400 leading-relaxed max-w-xl">{job.desc}</p>
                 </motion.div>
             ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          initial="hidden" 
          whileInView="visible" 
          viewport={viewportConfig}
          className="py-24 grid md:grid-cols-2 gap-16"
        >
           <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-medium mb-6">Initialize <br/>Collaboration.</h2>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">Available for freelance projects and full-time roles.</p>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-sm font-mono text-gray-400"><MapPin size={16} className="text-blue-500"/> MOODADI, KERALA</div>
                 <div className="flex items-center gap-4 text-sm font-mono text-gray-400"><Briefcase size={16} className="text-blue-500"/> OPEN FOR WORK</div>
              </div>
              <div className="flex gap-6 mt-12">
                 <a href="https://github.com" className="text-gray-500 hover:text-white transition-colors"><Github/></a>
                 <a href="https://linkedin.com" className="text-gray-500 hover:text-[#0077b5] transition-colors"><Linkedin/></a>
                 <a href="https://instagram.com" className="text-gray-500 hover:text-[#E1306C] transition-colors"><Instagram/></a>
                 <a href="https://twitter.com" className="text-gray-500 hover:text-[#1DA1F2] transition-colors"><Twitter/></a>
                 <a href="https://leetcode.com" className="text-gray-500 hover:text-[#FFA116] transition-colors"><SiLeetcode size={24}/></a>
              </div>
           </motion.div>
           <motion.form variants={fadeInUp} className="bg-white/[0.02] border border-white/5 p-8">
              <div className="space-y-6">
                 <div><label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Identity</label><input type="text" className="w-full bg-[#050505] border border-white/10 p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Name / Company" /></div>
                 <div><label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Transmission</label><textarea rows="4" className="w-full bg-[#050505] border border-white/10 p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Project details..."></textarea></div>
                 <button className="w-full py-4 bg-white text-black font-bold hover:bg-gray-200 transition-colors flex justify-center items-center gap-2 uppercase tracking-wider text-sm">Send Message <ArrowRight size={16}/></button>
              </div>
           </motion.form>
        </motion.section>

        <footer className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
           <div>© 2026 DEV.IO [ SYSTEM ACTIVE ]</div>
           <div className="mt-2 md:mt-0">DESIGNED IN KERALA, INDIA</div>
        </footer>
      </main>

      {/* --- PREMIUM MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
            >
                <motion.div 
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()} 
                    className="bg-[#0f0f0f] border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl relative scrollbar-custom"
                >
                    {/* Sticky Header */}
                    <div className="sticky top-0 z-20 bg-[#0f0f0f]/90 backdrop-blur-md p-6 border-b border-white/5 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h2>
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="p-2 bg-white/5 rounded-full text-gray-400 hover:bg-white hover:text-black transition-all"
                        >
                            <X size={20}/>
                        </button>
                    </div>

                    <div className="p-6 md:p-8">
                        {/* Video / Image Area */}
                        <div className="w-full aspect-video bg-[#1a1a1a] rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group mb-8">
                            <div className={`absolute inset-0 opacity-10 ${selectedProject.color}`}></div>
                            {/* Grid Pattern in Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                            
                            <div className="flex flex-col items-center gap-4 z-10">
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <Play fill="white" className="ml-1 w-8 h-8 text-white"/>
                                </div>
                                <span className="text-xs font-mono text-gray-500 tracking-widest">WATCH DEMO</span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h3 className="text-sm font-mono text-blue-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                                        <Terminal size={14}/> Project Overview
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {selectedProject.longDesc || selectedProject.desc}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-mono text-blue-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                                        <Cpu size={14}/> Key Features
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Real-time data synchronization with sub-second latency.",
                                            "Responsive UI optimized for mobile and desktop viewports.",
                                            "Secure authentication flow with JWT and encrypted storage.",
                                            "Scalable backend architecture capable of high concurrency."
                                        ].map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-2"></div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar Info */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase mb-3 tracking-wider">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.stack.map(tech => (
                                            <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-sm font-mono text-gray-500 uppercase mb-3 tracking-wider">Links</h3>
                                    <div className="flex flex-col gap-3">
                                        <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                                            <ExternalLink size={18}/> Live Demo
                                        </a>
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                                            <Github size={18}/> View Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* --- CUSTOM CSS FOR SCROLLBAR --- */}
      <style>{`
        /* Hide scrollbar for Horizontal lists */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        /* Custom Cool Scrollbar for Body and Modal */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0a0a0a; 
        }
        ::-webkit-scrollbar-thumb {
            background: #333; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #2563eb; /* Blue highlight on hover */
        }
        /* Specific class for modal internal scrolling */
        .scrollbar-custom::-webkit-scrollbar-track {
            background: #0f0f0f;
            margin-top: 10px;
            margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

// --- COMPONENT: MOBILE SWIPE SLIDER ---
const MobileSwipeSlider = ({ items, renderItem }) => {
    const [index, setIndex] = useState(0);
    const x = useMotionValue(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if(isPaused) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, [index, isPaused, items.length]);

    const handleDragEnd = (e, { offset }) => {
        setIsPaused(false);
        const swipe = offset.x;
        if (swipe < -50) {
            setIndex((prev) => (prev + 1) % items.length);
        } else if (swipe > 50) {
            setIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <motion.div 
                    className="flex"
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={handleDragEnd}
                    style={{ x }}
                >
                    {items.map((item, idx) => (
                        <div key={idx} className="min-w-full px-1">
                            {renderItem(item)}
                        </div>
                    ))}
                </motion.div>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === index ? 'bg-blue-500' : 'bg-gray-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

// --- COMPONENT: CERTIFICATE CARD ---
const CertificateCard = ({ cert }) => (
    <div className="bg-[#0f0f0f] border border-white/10 p-4 hover:border-blue-500/30 transition-colors group cursor-pointer h-full">
        <div className="aspect-video bg-[#1a1a1a] mb-4 border border-white/5 flex items-center justify-center relative overflow-hidden">
            {cert.image ? (
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
            ) : (
                <Award size={32} className="text-gray-600 group-hover:text-blue-500 transition-colors" />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-mono text-white">VIEW_CERT</span>
            </div>
        </div>
        <h3 className="text-white font-medium">{cert.title}</h3>
        <div className="flex justify-between mt-2 text-xs font-mono text-gray-500">
            <span>{cert.issuer}</span>
            <span>{cert.date}</span>
        </div>
    </div>
);

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, onClick }) => (
    <div onClick={onClick} className="group border border-white/10 bg-[#0f0f0f] hover:border-white/30 transition-all h-full cursor-pointer">
        <div className="h-48 w-full bg-[#151515] relative overflow-hidden border-b border-white/10 group-hover:opacity-90 transition-opacity">
            <div className={`absolute inset-0 opacity-20 ${project.color}`}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 border border-white/10 rounded bg-[#0a0a0a] flex flex-col p-2 gap-2 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <div className="w-1/2 h-1 bg-white/20 rounded-full"></div>
                <div className="w-3/4 h-1 bg-white/10 rounded-full"></div>
                <div className="w-full h-8 bg-white/5 rounded mt-auto flex items-center justify-center text-[8px] text-gray-600 font-mono">PREVIEW.JPG</div>
            </div>
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={16} className="text-white"/></div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed h-10">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
                {project.stack.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase border border-white/10 px-2 py-1 text-gray-500">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const TechCard = ({ name, icon, color }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="border border-white/10 bg-[#0f0f0f] p-4 flex flex-col items-center justify-center gap-3 hover:border-white/30 hover:bg-[#151515] transition-all cursor-default group">
     <div className="text-3xl" style={{ color: color }}>{icon}</div>
     <span className="text-xs font-mono text-gray-500 group-hover:text-white uppercase">{name}</span>
  </motion.div>
);

export default Portfolio;