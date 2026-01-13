import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Icons for UI
import { 
  Github, Linkedin, Instagram, ExternalLink, 
  ArrowUpRight, Globe, Database, Briefcase, 
  Layout, MapPin, ArrowRight, User, Award, Twitter,
  Smartphone, Video, Monitor, Code2, Terminal, Cpu
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

// --- IMAGE IMPORTS ---
// Replace these paths with the actual names of your files in src/assets
// If you don't have images yet, comment these out and the placeholders will work.
// import metaCertImg from './assets/meta_backend.jpg'; 
// import awsCertImg from './assets/aws_cloud.jpg';
// import reactCertImg from './assets/react_native.jpg';
// import bootcampCertImg from './assets/fullstack.jpg';
import certificate1 from './assets/certificate/certificate-1.png';
import certificate2 from './assets/certificate/certificate-2.png';
import certificate3 from './assets/certificate/certificate-3.png';
import certificate4 from './assets/certificate/certificate-4.png';
import certificate5 from './assets/certificate/certificate-5.png';
import certificate6 from './assets/certificate/certificate-6.png';
import certificate7 from './assets/certificate/certificate-7.png';
import certificate8 from './assets/certificate/certificate-8.png';


// --- DATA: PROJECTS ---
const PROJECTS = [
  { 
      title: "Disaster Response", 
      desc: "Offline-first coordination app for rescue teams.",
      stack: ["Flutter", "Firebase", "Maps"],
      color: "bg-blue-600"
  },
  { 
      title: "E-Commerce Nursery", 
      desc: "Full-stack plant marketplace with inventory.",
      stack: ["MERN", "Redux", "Stripe"],
      color: "bg-green-600"
  },
  { 
      title: "Collab Code Editor", 
      desc: "Real-time pair programming environment.",
      stack: ["React", "Socket.io", "Node"],
      color: "bg-purple-600"
  },
  { 
      title: "ATS Resume Builder", 
      desc: "AI-driven resume optimization SaaS.",
      stack: ["Next.js", "Django", "OpenAI"],
      color: "bg-orange-600"
  },
  { 
      title: "Blood Donation Net", 
      desc: "Donor bridging network with notifications.",
      stack: ["Django", "React Native"],
      color: "bg-red-600"
  }
];

// --- DATA: CERTIFICATES ---
const CERTIFICATES = [
  { 
    title: "Meta Backend Developer", 
    issuer: "Coursera", 
    date: "2024", 
    image: certificate1 // Variable from import
  },
  { 
    title: "Supabase Database Specialist", 
    issuer: "Udemy", 
    date: "2024",
    image: certificate2 
  },
  { 
    title: "React Native Specialist", 
    issuer: "Udemy", 
    date: "2023",
    image: certificate3 
  },
  { 
    title: "Full Stack Bootcamp", 
    issuer: "Udemy", 
    date: "2022",
    image: certificate4
  },
   { 
    title: "Full Stack Bootcamp", 
    issuer: "Udemy", 
    date: "2022",
    image: certificate5
  },
   { 
    title: "Full Stack Bootcamp", 
    issuer: "Udemy", 
    date: "2022",
    image: certificate6
  },
   { 
    title: "Full Stack Bootcamp", 
    issuer: "Udemy", 
    date: "2022",
    image: certificate7
  },
   { 
    title: "Full Stack Bootcamp", 
    issuer: "Udemy", 
    date: "2022",
    image: certificate8
  }
];

// --- TECH STACK DATA ---
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] font-sans selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* Background & Header remain same... */}
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
             <div className="w-8 h-8 bg-blue-600 flex items-center justify-center font-bold text-white text-sm tracking-tighter">DE</div>
             <div className="flex flex-col leading-none">
                <span className="font-bold text-sm text-white">DEV.IO</span>
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
            Full Stack Engineer • Version 3.0
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.05]">
            Industrial Grade <br/>
            <span className="text-gray-600">Digital Solutions.</span>
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
            <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
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
            <span className="font-mono text-xs text-gray-500">[ 2023 — 2026 ]</span>
          </motion.div>
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="md:hidden">
             <MobileAutoSlider items={PROJECTS} renderItem={(project) => <ProjectCard project={project} />} />
          </div>
        </motion.section>

        {/* --- CERTIFICATES SECTION --- */}
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
             <MobileAutoSlider items={CERTIFICATES} renderItem={(cert) => <CertificateCard cert={cert} />} />
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
                { role: "Freelance Full Stack Developer", time: "Current", company: "Global Remote", desc: "Architecting scalable web & mobile solutions." },
                { role: "Content Creator", time: "2023 — Present", company: "Community", desc: "Producing technical content for developers." },
                { role: "Hackathon Winner", time: "2024", company: "TechNova", desc: "Secured 1st place building an AI Disaster Response tool." }
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
      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </div>
  );
};

// --- COMPONENT: MOBILE SLIDER ---
const MobileAutoSlider = ({ items, renderItem }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => { setIndex((prev) => (prev + 1) % items.length); }, 3000);
        return () => clearInterval(interval);
    }, [items.length]);
    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <motion.div className="flex" animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                    {items.map((item, idx) => (
                        <div key={idx} className="min-w-full px-1">{renderItem(item)}</div>
                    ))}
                </motion.div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, idx) => (
                    <button key={idx} onClick={() => setIndex(idx)} className={`w-2 h-2 rounded-full transition-colors ${idx === index ? 'bg-blue-500' : 'bg-gray-700'}`} />
                ))}
            </div>
        </div>
    );
};

// --- COMPONENT: CERTIFICATE CARD (UPDATED TO RENDER IMAGE) ---
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
const ProjectCard = ({ project }) => (
    <div className="group border border-white/10 bg-[#0f0f0f] hover:border-white/30 transition-all h-full">
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