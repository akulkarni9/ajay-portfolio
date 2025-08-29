import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Menu, X, Briefcase, ArrowUpRight, Download, Eye, ArrowUp, GraduationCap } from 'lucide-react';

// --- TYPE DEFINITIONS ---

interface HeroData {
  greeting: string;
  line1: string;
  line2: string;
}

interface AboutData {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

interface SkillsData {
  leadership: string[];
  aiCloud: string[];
  fullStack: string[];
}

interface ExperienceData {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface EducationData {
  degree: string;
  institution: string;
  period: string;
}

interface ProjectData {
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  link: string;
}

interface BlogData {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

interface PortfolioData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  headshotUrl: string;
  hero: HeroData;
  about: AboutData;
  skills: SkillsData;
  experience: ExperienceData[];
  education: EducationData[];
  projects: ProjectData[];
  blog: BlogData[];
}


// --- CUSTOMIZATION SECTION ---
// Edit the values below to personalize your portfolio

const portfolioData: PortfolioData = {
  name: "Ajay Kulkarni",
  title: "Engineering Manager - AI/ML & Cloud",
  email: "ajaykulkarni178@gmail.com",
  linkedin: "https://linkedin.com/in/akulkarni178",
  github: "https://github.com/akulkarni9",
  resumeUrl: "/AjayKulkarni-Resume.pdf", // IMPORTANT: Make sure this is a PDF file in your /public folder
  headshotUrl: "/Ajay.jpg",
  hero: {
    greeting: "Hi, I'm Ajay.",
    line1: "I build and lead teams that create intelligent, scalable systems.",
    line2: "From greenfield AI platforms to enterprise-grade cloud solutions, I love solving complex problems and driving innovation.",
  },
  about: {
    p1: "In my current role as Associate Manager at Accenture, I harness the power of data and artificial intelligence to drive transformative solutions. My passion lies in developing and deploying AI systems that unlock new possibilities and deliver measurable value.",
    p2: "Previously, at NatWest Group, I led the development of the Carbon Planner, a groundbreaking web application empowering organizations to enhance sustainability efforts. This initiative earned the 'Best Environment Project' award, underscoring its positive environmental and business impact.",
    p3: "With over a decade of experience in software development, including 1.5 years in product management, I have delivered innovative solutions across industries. My expertise spans leading cross-functional teams, collaborating with PMOs, and delivering results through Agile methodologies while aligning technical solutions with business objectives.",
    p4: "Living with a hearing disability from birth has shaped my journey in profound ways. It has taught me the power of adaptability, perseverance, and clear communication. I embrace it as a strength that fuels my commitment to fostering inclusive collaboration and breaking down barriers in the tech industry."
  },
  skills: {
    leadership: ["Engineering Leadership", "System Design", "Distributed Systems", "Agile Delivery"],
    aiCloud: ["AI/ML", "Agentic AI", "LLMs", "GCP", "AWS", "Azure", "Kubernetes", "Python"],
    fullStack: ["React", "Angular", "Flutter", "Kotlin", "Android"]
  },
  experience: [
    {
      role: "Associate Manager – Software & Platforms",
      company: "Accenture",
      period: "Aug 2024 – Present",
      description: [
        "Leading AI platforms for the insurance industry, architecting scalable, cloud-native systems on Azure.",
        "Developed a Bordereaux Standardization Platform with a GPT-4o engine, reducing manual effort by 40%.",
        "Driving 'Market Matrix,' a greenfield AI platform, integrating Azure OpenAI with enterprise-grade security.",
        "Architected an Agentic AI claims system, automating 60% of workflows and improving resolution time by 35%.",
        "Managing a cross-functional team of 12 engineers and collaborating with PMs and stakeholders."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "NatWest Group",
      period: "Sep 2021 – Aug 2024",
      description: [
        "Led development of 'Carbon Planner,' reducing latency by 40% on AWS.",
        "Optimized AWS infrastructure (microservices, CI/CD), cutting operational costs by 20%.",
        "Mentored 5 junior developers, boosting delivery velocity by 25%.",
        "Awarded 'Best Environmental Project,' establishing Carbon Planner as a key green-banking solution."
      ]
    },
    {
      role: "Software Engineer",
      company: "DellEMC",
      period: "Oct 2017 – Sep 2021",
      description: [
        "Delivered multi-tiered enterprise applications, resolving complex challenges in distributed systems.",
        "Built an Android app (Kotlin/Jetpack), driving a 15% increase in customer satisfaction.",
        "Optimized distributed systems performance, reducing latency by 30%."
      ]
    },
    {
      role: "Earlier Roles",
      company: "Enexl, Cheerz Labs, DF3D, VA Tech",
      period: "Pre-2017",
      description: [
        "Engineered fintech platforms, innovated on Brain-Computer Interface (BCI) devices, and built 3D e-commerce solutions.",
        "Contributed to early-stage product adoption and platform efficiency improvements."
      ]
    }
  ],
  education: [
    {
      degree: "M.Tech, Software Engineering",
      institution: "BITS Pilani",
      period: "2019 – 2021",
    },
    {
      degree: "B.E., Computer Science & Engineering",
      institution: "SJCE, Mysore",
      period: "2009 – 2013",
    }
  ],
  projects: [
    {
      title: "Market Matrix - AI Insights Platform",
      description: "Architected a greenfield, AI-powered platform to provide next-generation insights for insurance brokers, integrating Azure OpenAI and enterprise-grade security.",
      tags: ["AI/ML", "Azure", "System Design", "Security"],
      features: [
          "Real-time market trend analysis.",
          "Generative AI-powered report summarization.",
          "Enterprise-grade security with Imperva WAF & Entra ID.",
          "Scalable, cloud-native architecture on Azure."
      ],
      link: "#",
    },
    {
      title: "Agentic AI Claims Processing",
      description: "Designed and led the development of an AI-driven system that automated 60% of insurance claims workflows, improving resolution time by 35%.",
      tags: ["Agentic AI", "Automation", "Node.js", "Cloud"],
      link: "#",
    },
    {
      title: "Carbon Planner Sustainability Platform",
      description: "Led the development of the award-winning 'Carbon Planner,' a key green-banking solution. Scaled its data processing on AWS to reduce latency by 40% and cut operational costs by 20%.",
      tags: ["AWS", "Microservices", "React", "Leadership"],
      link: "#",
    },
    {
      title: "Bordereaux Standardization Engine",
      description: "Developed a platform using a Fuzzy Logic and GPT-4o mapping engine to standardize complex insurance documents, reducing manual effort by over 40%.",
      tags: ["LLM", "GPT-4o", "Python", "Cloud Workflows"],
      features: [
        "Asynchronous cloud workflows for high throughput.",
        "Fuzzy Logic matching for data mapping.",
        "GPT-4o integration for intelligent standardization.",
        "Achieved over 40% reduction in manual effort."
      ],
      link: "#",
    },
  ],
  blog: [
    {
      title: "Empathy: The Leadership Skill We Don't Talk About Enough",
      date: "April 8, 2025",
      excerpt: "A deep dive into why empathy is a critical, yet often overlooked, trait for effective leadership in the tech industry.",
      link: "https://www.linkedin.com/pulse/empathy-leadership-skill-we-dont-talk-enough-ajay-kulkarni-umogc/"
    },
    {
      title: "Leadership is for Everyone: Lessons from a Deaf Professional",
      date: "August 15, 2025",
      excerpt: "Sharing personal insights on how overcoming challenges can forge a unique and powerful leadership style accessible to anyone.",
      link: "https://www.linkedin.com/pulse/leadership-everyone-lessons-from-deaf-professional-ajay-kulkarni-5ewmc/"
    },
  ]
};

// --- COMPONENT PROP TYPES ---

interface SkillPillProps {
  skill: string;
  delay: number;
}

interface ProjectCardProps {
  project: ProjectData;
  className?: string;
}

interface ExperienceCardProps {
  exp: ExperienceData;
  index: number;
}

interface EducationCardProps {
    edu: EducationData;
    index: number;
}

interface BlogCardProps {
  post: BlogData;
  index: number;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface HeaderProps {
  activeSection: string;
}

interface ResumeViewerModalProps {
    url: string;
    onClose: () => void;
}

interface ResumeProps {
    setShowResumeViewer: (show: boolean) => void;
}


// --- STYLING & COMPONENTS ---

const Logo: React.FC = () => (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-3 text-2xl font-bold text-slate-800 dark:text-white group">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-9 h-9 flex items-center justify-center rounded-lg font-mono shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-12deg]">
            A
        </div>
        <span className="hidden sm:inline-block">{portfolioData.name}</span>
    </button>
);


const SkillPill: React.FC<SkillPillProps> = ({ skill, delay }) => (
    <span 
        className="inline-block bg-indigo-100 dark:bg-slate-700 text-indigo-800 dark:text-indigo-300 rounded-full px-4 py-2 text-sm font-medium mr-2 mb-2 shadow-sm animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
    >
        {skill}
    </span>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => (
    <div className={`bg-white dark:bg-slate-800/50 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${className}`}>
        <div className="p-6 flex flex-col h-full">
            <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-base">{project.description}</p>
                {project.features && (
                    <ul className="mt-4 list-disc list-inside text-slate-500 dark:text-slate-400 space-y-1.5 text-sm">
                        {project.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                )}
            </div>
            <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <SkillPill key={tag} skill={tag} delay={0} />)}
                </div>
                {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-6 text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold group">
                        View Project <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                )}
            </div>
        </div>
    </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
    <div className="flex space-x-6 group">
        <div className="flex flex-col items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center z-10 shadow-md">
                <Briefcase className="text-white" size={16} />
            </div>
            <div className="flex-grow w-0.5 bg-slate-200 dark:bg-slate-700 group-last:hidden"></div>
        </div>
        <div className="pb-12">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white -mt-1">{exp.role}</h3>
            <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium">{exp.company} | {exp.period}</p>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1.5">
                {exp.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    </div>
);

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => (
    <div className="flex space-x-6 group">
        <div className="flex flex-col items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center z-10 shadow-md">
                <GraduationCap className="text-white" size={16} />
            </div>
            <div className="flex-grow w-0.5 bg-slate-200 dark:bg-slate-700 group-last:hidden"></div>
        </div>
        <div className="pb-12">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white -mt-1">{edu.degree}</h3>
            <p className="text-indigo-500 dark:text-indigo-400 text-sm font-medium">{edu.institution} | {edu.period}</p>
        </div>
    </div>
);

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-slate-800/50 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="p-6">
            <p className="text-sm text-indigo-500 dark:text-indigo-400 mb-1">{post.date}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{post.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">{post.excerpt}</p>
            <div className="inline-flex items-center text-indigo-500 dark:text-indigo-300 font-semibold group">
                Read on LinkedIn <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
        </div>
    </a>
);

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <section id={id} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl mb-16 text-center">{title}</h2>
            {children}
        </div>
    </section>
);

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navLinks = ["About", "Skills", "Experience", "Education", "Projects", "Blog", "Resume", "Contact"];

    return (
        <header className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navLinks.map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === link.toLowerCase() ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-500 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400'}`}>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
                            aria-label={isOpen ? "Close main menu" : "Open main menu"}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white/95 dark:bg-slate-950/95">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="hero-aurora"></div>
            <div className="max-w-5xl mx-auto text-center z-10">
                <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
                    <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {portfolioData.hero.greeting}
                    </span>
                    <span className="block text-indigo-500 dark:text-indigo-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        {portfolioData.hero.line1}
                    </span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    {portfolioData.hero.line2}
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <a href="#projects" className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50">
                        View My Work
                    </a>
                    <div className="flex space-x-6">
                        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="View Ajay Kulkarni's GitHub profile" className="text-slate-400 hover:text-indigo-500 transition-colors">
                            <Github size={32} />
                        </a>
                        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View Ajay Kulkarni's LinkedIn profile" className="text-slate-400 hover:text-indigo-500 transition-colors">
                            <Linkedin size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ url, onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[101] p-4" onClick={onClose}>
        <div className="bg-white dark:bg-slate-800 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b dark:border-slate-700">
                <h3 className="font-bold text-lg">Resume</h3>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">
                    <X size={24} />
                </button>
            </div>
            <div className="flex-grow">
                <iframe src={url} width="100%" height="100%" title="Resume Viewer"></iframe>
            </div>
        </div>
    </div>
);

const Resume: React.FC<ResumeProps> = ({ setShowResumeViewer }) => (
    <Section id="resume" title="My Resume">
        <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                For a more detailed look at my work history, technical skills, and certifications, you can view or download my full resume.
            </p>
            <div className="flex justify-center items-center space-x-4">
                <button
                    onClick={() => setShowResumeViewer(true)}
                    className="inline-flex items-center bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-white font-bold py-3 px-6 rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <Eye size={20} className="mr-2" />
                    View Resume
                </button>
                <a
                    href={portfolioData.resumeUrl}
                    download
                    className="inline-flex items-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
                >
                    <Download size={20} className="mr-2" />
                    Download
                </a>
            </div>
        </div>
    </Section>
);

const Contact: React.FC = () => (
    <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <a href={`mailto:${portfolioData.email}`} className="text-2xl font-mono text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                {portfolioData.email}
            </a>
            <div className="flex justify-center space-x-8 mt-10">
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="View Ajay Kulkarni's GitHub profile" className="text-slate-400 hover:text-indigo-500 transition-colors">
                    <Github size={32} />
                </a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View Ajay Kulkarni's LinkedIn profile" className="text-slate-400 hover:text-indigo-500 transition-colors">
                    <Linkedin size={32} />
                </a>
            </div>
        </div>
    </Section>
);

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform ${isVisible ? 'scale-100' : 'scale-0'}`}
        >
            <ArrowUp size={24} />
        </button>
    );
};


export default function App() {
    const [showResumeViewer, setShowResumeViewer] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [animatedSkills, setAnimatedSkills] = useState<boolean>(false);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setAnimatedSkills(true);
                }
            });
        }, { threshold: 0.2 });


        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
        
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsObserver.observe(skillsSection);
        }


        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 5rem; /* Adjust this value to match your header height */
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
        opacity: 0;
      }
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .hero-aurora {
        position: absolute;
        inset: 0;
        overflow: hidden;
        z-index: 0;
      }
      .hero-aurora::before, .hero-aurora::after {
        content: '';
        position: absolute;
        width: 1000px;
        height: 1000px;
        background-image: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 60%);
        border-radius: 50%;
        animation: aurora-animation 20s infinite linear;
        top: 50%;
        left: 50%;
      }
      .hero-aurora::after {
        background-image: radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0) 60%);
        animation-delay: 10s;
      }
      @keyframes aurora-animation {
          0% { transform: translate(-50%, -50%) rotate(0deg) scale(0.8); }
          25% { transform: translate(-20%, -80%) rotate(90deg) scale(1.2); }
          50% { transform: translate(20%, -20%) rotate(180deg) scale(0.9); }
          75% { transform: translate(-80%, 20%) rotate(270deg) scale(1.1); }
          100% { transform: translate(-50%, -50%) rotate(360deg) scale(0.8); }
      }
    `;
        document.head.appendChild(styleTag);

        return () => {
            sectionObserver.disconnect();
            skillsObserver.disconnect();
            if (document.head.contains(styleTag)) {
                document.head.removeChild(styleTag);
            }
        }
    }, []);

    let skillDelay = 0;

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans leading-relaxed transition-colors duration-300">
            <Header activeSection={activeSection} />
            <main>
                <Hero />

                <Section id="about" title="About Me">
                    <div className="grid md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-1">
                            <img src={portfolioData.headshotUrl} alt="Professional headshot of Ajay Kulkarni" className="rounded-full w-64 h-64 mx-auto md:w-full md:h-auto shadow-lg object-cover" />
                        </div>
                        <div className="md:col-span-2 space-y-4 text-lg text-slate-600 dark:text-slate-300 text-left">
                            <p>{portfolioData.about.p1}</p>
                            <p>{portfolioData.about.p2}</p>
                            <p>{portfolioData.about.p3}</p>
                            <p>{portfolioData.about.p4}</p>
                        </div>
                    </div>
                </Section>

                <Section id="skills" title="Skills & Technologies">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-center mb-4">Leadership & Architecture</h3>
                            <div className="flex flex-wrap justify-center">
                                {animatedSkills && portfolioData.skills.leadership.map(skill => {
                                    skillDelay += 50;
                                    return <SkillPill key={skill} skill={skill} delay={skillDelay} />
                                })}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center mb-4">AI/Cloud Engineering</h3>
                            <div className="flex flex-wrap justify-center">
                                {animatedSkills && portfolioData.skills.aiCloud.map(skill => {
                                    skillDelay += 50;
                                    return <SkillPill key={skill} skill={skill} delay={skillDelay} />
                                })}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-center mb-4">Full-Stack & Mobile</h3>
                            <div className="flex flex-wrap justify-center">
                                {animatedSkills && portfolioData.skills.fullStack.map(skill => {
                                     skillDelay += 50;
                                     return <SkillPill key={skill} skill={skill} delay={skillDelay} />
                                })}
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="experience" title="Professional Experience">
                    <div className="max-w-3xl mx-auto flex flex-col">
                        {portfolioData.experience.map((exp, index) => <ExperienceCard key={index} exp={exp} index={index} />)}
                    </div>
                </Section>

                <Section id="education" title="Education">
                    <div className="max-w-3xl mx-auto flex flex-col">
                        {portfolioData.education.map((edu, index) => <EducationCard key={index} edu={edu} index={index} />)}
                    </div>
                </Section>

                <Section id="projects" title="Featured Projects">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ProjectCard project={portfolioData.projects[0]} className="md:col-span-2" />
                        <ProjectCard project={portfolioData.projects[1]} className="md:col-span-1" />
                        <ProjectCard project={portfolioData.projects[2]} className="md:col-span-1" />
                        <ProjectCard project={portfolioData.projects[3]} className="md:col-span-2" />
                    </div>
                </Section>

                <Section id="blog" title="From the Blog">
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolioData.blog.map((post, index) => <BlogCard key={post.title} post={post} index={index} />)}
                    </div>
                </Section>

                <Resume setShowResumeViewer={setShowResumeViewer} />

                <Contact />
            </main>

            {showResumeViewer && <ResumeViewerModal url={portfolioData.resumeUrl} onClose={() => setShowResumeViewer(false)} />}

            <BackToTopButton />

            <footer className="bg-white dark:bg-slate-900/50 py-6 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto flex justify-center items-center text-slate-500 dark:text-slate-400">
                    <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}