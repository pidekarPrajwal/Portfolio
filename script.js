const { useState, useEffect, useRef } = React;

// --- Icons ---
const Icons = {
    Menu: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
    ),
    Close: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
    Github: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    ),
    LinkedIn: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    Download: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    ),
    Mail: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    Location: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
    Code: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    Briefcase: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    ),
    Award: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    ),
    Book: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    External: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    ),
    Check: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    ArrowRight: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    ),
    User: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    ),
    Layers: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
    ),
};

// --- Portfolio Data ---
const DATA = {
    name: 'Prajwal Pidekar',
    title: 'Full Stack Developer',
    tagline: 'Building production-grade systems with React, Django & AWS',
    about: 'Results-driven Full Stack Developer with 10+ months of production experience building end-to-end systems across frontend (React 18, Vite, Tailwind CSS, MUI) and backend (Django REST Framework, PostgreSQL, AWS S3) at Ordient Solutions Pvt Ltd. Proficient in the MERN stack, JWT authentication, CI/CD pipelines, and automated reporting systems. Strong foundation in Data Structures & Algorithms, OOP, and Agile/Scrum workflows. Seeking a Full Stack or Backend Developer role to deliver production-quality solutions within a high-performance engineering team.',
    location: 'Amravati, Maharashtra, India',
    email: 'pidekar.prajwal@outlook.com',
    github: 'https://github.com/pidekarPrajwal',
    linkedin: 'https://linkedin.com/in/prajwal-pidekar',
    resumeUrl: 'Pidekar_Resume.pdf',

    skills: {
        languages: ['JavaScript (ES6+)', 'Python', 'Java', 'C', 'C++', 'TypeScript (Familiar)'],
        frontend: ['React.js', 'React 18', 'Vite', 'HTML5', 'CSS3', 'EJS', 'Tailwind CSS', 'Bootstrap', 'Material UI (MUI 6)'],
        backend: ['Node.js', 'Express.js', 'Django', 'Django REST Framework (DRF)', 'REST APIs', 'API Integration'],
        databases: ['PostgreSQL', 'MongoDB', 'MySQL (mysql2)', 'SQL', 'NoSQL'],
        auth: ['JWT', 'SimpleJWT', 'Express-Session', 'RBAC', 'Secure Coding Practices'],
        cloud: ['AWS S3', 'boto3', 'django-storages', 'GitHub Actions CI/CD', 'EC2 Deployment', 'Vercel', 'Render'],
        tools: ['Git', 'GitHub', 'Postman', 'Chart.js', 'OpenPyXL', 'ReportLab', 'Pandas', 'python-docx', 'Flash', 'Dotenv'],
        methodologies: ['Agile', 'Scrum', 'OOPs', 'DSA', 'MVC Architecture', 'CI/CD'],
    },

    experience: [{
        company: 'Ordient Solutions Pvt Ltd',
        location: 'Amravati, Maharashtra - On-site',
        role: 'Full Stack Developer',
        period: '10+ months',
        projects: [{
            name: 'SP3 Attendance - Workforce Attendance Backend',
            tech: 'Python · Django 4.2 · DRF · PostgreSQL · AWS S3 · SimpleJWT · OpenPyXL · ReportLab · Pillow',
            points: [
                'Built RESTful APIs for GPS-geofenced punch-in/out with Pillow-generated image timestamp overlays, eliminating proxy punch fraud and enforcing data integrity via uniqueness constraints per employee/date/shift.',
                'Integrated AWS S3 (boto3/django-storages) for secure media storage; built ORM-aggregate analytics APIs with PostgreSQL indexed queries for shift-wise and designation-level dashboards.',
                'Automated PDF and Excel Muster Roll generation (ReportLab + OpenPyXL), cutting monthly payroll report creation from hours to seconds; implemented SimpleJWT refresh rotation and soft-delete patterns.'
            ]
        }, {
            name: 'SP3 Attendance - Admin Portal Frontend',
            tech: 'React 18 · Vite 6 · Tailwind CSS · Material UI 6 · Chart.js · Axios · Google Maps API · GitHub Actions · EC2',
            points: [
                'Developed a responsive workforce attendance admin portal with JWT + Axios interceptor auth, automatic token refresh, and role-based CRUD routing via custom useCrudGuard hook across six core modules.',
                'Integrated Google Maps API for geofenced punch location validation; built Chart.js dashboards for Required vs. Actual manpower visualizations; enabled one-click Excel/PDF/Muster Roll blob exports.',
                'Optimized bundle size using Vite code-splitting and React.lazy(); configured GitHub Actions CI/CD to deploy production builds to AWS EC2 via SCP with systemd zero-downtime restarts.'
            ]
        }, {
            name: 'Sumit-MIS - Municipal Waste & Fleet Management Backend',
            tech: 'Python · Django · DRF · PostgreSQL · OpenPyXL · Pandas · NumPy · Gunicorn · JWT/Token Auth',
            points: [
                'Developed RESTful APIs for fleet operations, maintenance records, fuel consumption, and employee management; built real-time analytics dashboards (area-wise sweeping, daily billing trends) for municipal projects.',
                'Designed automated Excel report generation (OpenPyXL + Pandas) with dynamic formatting, custom filters, and multi-project header handling, reducing manual operational reporting overhead significantly.',
                'Implemented RBAC using Token authentication for strict user authorization; debugged ORM query filtering bugs and handled edge cases for missing Ward/Area geographic data.'
            ]
        }, {
            name: 'MSPHC - Maharashtra State Police Housing Backend',
            tech: 'Python · Django · DRF · PostgreSQL · ReportLab · python-docx · HarfBuzz · FreeType · deep-translator',
            points: [
                'Built scalable RESTful APIs for full lifecycle tracking of police housing projects (AA Approvals, Tendering, Milestones, Expenditures, Handover) with real-time executive dashboards for CM and Board of Directors.',
                'Architectured bilingual (English + Marathi) automated PDF and Word (.docx) report generation; engineered a custom Devanagari text-shaping engine (HarfBuzz + FreeType + fontTools) for official government compliance.',
                'Reduced document creation from hours to seconds; integrated deep-translator for dynamic Marathi status labels and GIN-indexed PostgreSQL queries for high-performance financial aggregations.'
            ]
        }, {
            name: 'SFL Punch - Field Force & Attendance Management Backend',
            tech: 'Python 3 · Django 5 · DRF · PostgreSQL · django-crontab · ReportLab · OpenPyXL',
            points: [
                'Developed RESTful APIs for field attendance (punch-in/out), leave approvals, site visit logs, and user profile operations; built automated PDF/Excel engines for monthly manpower analytics and location tracking.',
                'Configured django-crontab background jobs for automated email notifications and scheduled report delivery; optimized PostgreSQL queries, implemented API logging middleware, and resolved production issues.',
                'Digitized field team monitoring end-to-end, eliminating manual data entry errors and automating daily/monthly operational report delivery for field supervisors.'
            ]
        }]
    }],

    personalProjects: [{
        name: 'On-Road Fuel Delivery System',
        tech: 'Node.js · Express.js · MySQL (mysql2) · EJS · EJS-Mate · Express-Session · Connect-Flash · Dotenv · Vercel',
        description: 'On-demand emergency fuel delivery web application allowing stranded motorists to request Petrol/Diesel to their location. Built RESTful backend routes with Node.js and Express.js for secure user registration, login authentication, and fuel order processing.',
        github: 'https://github.com/pidekarPrajwal/on-road-fuel',
        live: null
    }, {
        name: 'WonderLust - Hotel Management System',
        tech: 'Node.js · Express.js · MySQL (mysql2) · EJS · EJS-Mate · Express-Session · Connect-Flash · Bootstrap · Dotenv',
        description: 'Full-stack hotel management web application with MVC architecture, server-side rendering, and relational database design. Implemented room browsing, booking creation, and reservation management with session-based authentication.',
    }],

    education: [{
        degree: 'B.Sc. Computer Science',
        institution: 'Sant Gadge Baba Amravati University',
        period: '2021 - 2024',
        score: '71%'
    }, {
        degree: 'HSC - Science',
        institution: 'Ramkrishna Junior College, Amravati',
        period: '2018 - 2020',
        score: '61%'
    }, {
        degree: 'SSC',
        institution: 'Ramkrishna Krida Vidyalaya, Amravati',
        period: '2018',
        score: '65%'
    }],

    certifications: [
        'Data Structures & Algorithms - C++, Java (Cad-desk+)',
        'MERN Stack Development Training - React.js, Node.js, Express.js, MongoDB',
        'CCIT DCA - Diploma in Computer Applications',
        'Aarna Technology - Training Program'
    ],

    achievements: [
        'State/University-level Basketball Player - Represented S.G.B.A.U team in West Zone and Ashwamedh tournaments; demonstrates leadership, teamwork, and composure under pressure.'
    ],

    languages: ['English', 'Hindi (Native)', 'Marathi (Native)']
};

// --- Custom hook for scroll reveal ---
function useReveal(ref) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);
}

// --- Components ---
const NavLink = ({ href, children, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-sm font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors duration-300 relative group"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] transition-all duration-300 group-hover:w-full"></span>
    </a>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${scrolled ? 'nav-blur border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold tracking-tight text-[#F5F5F5]">
                    <span className="gradient-text">P P</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors">
                    {isOpen ? <Icons.Close /> : <Icons.Menu />}
                </button>
            </div>

            <div className={`md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] nav-blur border-t border-white/5 mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="flex flex-col items-center gap-6 pt-12 px-6">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href} onClick={closeMenu}>
                            <span className="text-lg">{item.label}</span>
                        </NavLink>
                    ))}
                    <a
                        href={DATA.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                        <Icons.Download />
                        View Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    return (
        <section id="hero" ref={heroRef} className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-8 relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px] animate-float bg-move"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#22D3EE]/10 blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute top-[20%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#6C63FF]/5 blur-[100px] animate-float" style={{ animationDelay: '-5s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#22D3EE] text-sm font-medium animate-fade-up">
                        <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></span> Open to opportunities
                    </div>

                    <h1 className="animate-fade-up delay-100">
                        <span className="block text-sm md:text-base text-[#9CA3AF] font-medium mb-2 hero-greeting">👋 Hello, I'm</span>
                        <span className="block text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight hero-name text-[#F5F5F5]">
                            <span className="gradient-text">{DATA.name}</span>
                        </span>
                        <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-[#9CA3AF] mt-1">{DATA.title}</span>
                    </h1>

                    <p className="text-base md:text-lg text-[#9CA3AF] max-w-xl leading-relaxed animate-fade-up delay-200">{DATA.tagline}</p>

                    <div className="flex flex-wrap items-center gap-4 pt-2 animate-fade-up delay-300">
                        <a
                            href={DATA.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                        >
                            <Icons.Download />
                            View Resume
                        </a>
                        <a
                            href="#contact"
                            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 border rounded-xl text-sm font-medium transition-all duration-300"
                        >
                            Get in Touch
                            <Icons.ArrowRight />
                        </a>
                    </div>

                    <div className="flex items-center gap-4 pt-4 animate-fade-up delay-400">
                        <a
                            href={DATA.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-[#6C63FF]/10 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300 text-[#9CA3AF] hover:text-[#F5F5F5]"
                        >
                            <Icons.Github />
                        </a>
                        <a
                            href={DATA.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 hover:bg-[#6C63FF]/10 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300 text-[#9CA3AF] hover:text-[#F5F5F5]"
                        >
                            <Icons.LinkedIn />
                        </a>
                        <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                            <Icons.Location />
                            <span>{DATA.location}</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-up delay-300">
                    <div className="relative">
                        <div className="w-60 h-60 md:w-72 md:h-72 rounded-full gradient-bg flex items-center justify-center shadow-2xl shadow-[#6C63FF]/20 border-2 border-[#6C63FF]/20">
                            <span className="text-7xl md:text-8xl font-black text-white/90">PP</span>
                        </div>
                        <div className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#6C63FF]/20 text-xs font-medium text-[#22D3EE] shadow-xl">
                            Full Stack
                        </div>
                        <div className="absolute -top-3 -left-3 px-4 py-2 rounded-xl bg-[#0D1117] border border-[#22D3EE]/20 text-xs font-medium text-[#6C63FF] shadow-xl">
                            10+ months
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const About = () => {
    const ref = useRef(null);
    useReveal(ref);
    return (
        <section id="about" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-5 gap-12 items-start">
                    <div className="md:col-span-2">
                        <h2 className="section-title text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <p className="mt-4 text-[#9CA3AF] text-sm leading-relaxed">
                            A quick overview of who I am and what drives me.
                        </p>
                        <div className="mt-6 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                                <span className="text-[#6C63FF]"><Icons.User /></span>
                                <span>{DATA.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                                <span className="text-[#6C63FF]"><Icons.Location /></span>
                                <span>{DATA.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                                <span className="text-[#6C63FF]"><Icons.Briefcase /></span>
                                <span>{DATA.title}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#F5F5F5]">
                                <span className="text-[#6C63FF]"><Icons.Mail /></span>
                                <span>{DATA.email}</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3 space-y-4">
                        <p className="text-[#F5F5F5] leading-relaxed text-base">{DATA.about}</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {DATA.languages.map((lang, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-[#9CA3AF] hover:border-[#6C63FF]/30 hover:text-[#F5F5F5] transition-colors"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const ref = useRef(null);
    useReveal(ref);

    const skillCategories = [
        { label: 'Languages', key: 'languages', icon: <Icons.Code /> },
        { label: 'Frontend', key: 'frontend', icon: <Icons.Layers /> },
        { label: 'Backend', key: 'backend', icon: <Icons.Code /> },
        { label: 'Databases', key: 'databases', icon: <Icons.Book /> },
        { label: 'Auth & Security', key: 'auth', icon: <Icons.Check /> },
        { label: 'Cloud & DevOps', key: 'cloud', icon: <Icons.Layers /> },
        { label: 'Tools & Libraries', key: 'tools', icon: <Icons.Code /> },
        { label: 'Methodologies', key: 'methodologies', icon: <Icons.Check /> },
    ];

    return (
        <section id="skills" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="section-title inline-block text-3xl md:text-4xl font-bold text-center text-[#F5F5F5]">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="mt-3 text-[#9CA3AF]">Technologies & tools I work with day-to-day.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillCategories.map((cat) => (
                        <div key={cat.key} className="p-5 rounded-2xl bg-[#0D1117] border border-white/5 card-hover card-border-glow">
                            <div className="flex items-center gap-2 text-[#6C63FF] mb-3">
                                {cat.icon}
                                <span className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider">{cat.label}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {DATA.skills[cat.key].map((skill, i) => (
                                    <span key={i} className="skill-tag px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs hover:text-[#F5F5F5]">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const ref = useRef(null);
    useReveal(ref);
    const exp = DATA.experience[0];

    return (
        <section id="experience" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14">
                    <h2 className="section-title text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="mt-3 text-[#9CA3AF]">
                        {exp.role} at {exp.company} · {exp.period}
                    </p>
                </div>

                <div className="space-y-12">
                    {exp.projects.map((project, idx) => (
                        <div key={idx} className="relative pl-6 md:pl-10 border-l-2 border-[#6C63FF]/30 last:border-l-transparent">
                            <div className="absolute left-[-7px] top-1 timeline-dot"></div>
                            {idx < exp.projects.length - 1 && <div className="timeline-line"></div>}
                            <div className="bg-[#0D1117] rounded-2xl p-6 md:p-8 border border-white/5 card-hover card-border-glow">
                                <h3 className="text-xl md:text-2xl font-bold text-[#F5F5F5]">{project.name}</h3>
                                <p className="text-sm text-[#22D3EE] font-mono mt-1">{project.tech}</p>
                                <ul className="mt-4 space-y-3">
                                    {project.points.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-[#F5F5F5] leading-relaxed">
                                            <span className="text-[#6C63FF] mt-1 flex-shrink-0">
                                                <Icons.Check />
                                            </span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const ref = useRef(null);
    useReveal(ref);
    return (
        <section id="projects" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14">
                    <h2 className="section-title text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                        Personal <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="mt-3 text-[#9CA3AF]">Side projects that showcase my full-stack abilities.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {DATA.personalProjects.map((proj, idx) => (
                        <div key={idx} className="bg-[#0D1117] rounded-2xl border border-white/5 overflow-hidden card-hover card-border-glow flex flex-col">
                            <div className="project-image-placeholder">
                                <span>{proj.name.includes('Fuel') ? '⛽' : '🏨'}</span>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-[#F5F5F5]">{proj.name}</h3>
                                <p className="text-sm text-[#22D3EE] font-mono mt-1">{proj.tech}</p>
                                <p className="mt-3 text-sm text-[#F5F5F5] leading-relaxed flex-1">{proj.description}</p>
                                {proj.github && (
                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] hover:text-[#6C63FF] transition-colors"
                                        >
                                            <Icons.Github /> View Source Code <Icons.External />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    const ref = useRef(null);
    useReveal(ref);
    return (
        <section id="education" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-14">
                    <h2 className="section-title text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                        Education <span className="gradient-text">& Certifications</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4 flex items-center gap-2">
                            <Icons.Book />
                            Academic
                        </h3>
                        <div className="space-y-4">
                            {DATA.education.map((edu, i) => (
                                <div key={i} className="bg-[#0D1117] p-5 rounded-xl border border-white/5 card-hover card-border-glow">
                                    <h4 className="font-bold text-[#F5F5F5]">{edu.degree}</h4>
                                    <p className="text-sm text-[#9CA3AF]">{edu.institution}</p>
                                    <div className="flex items-center justify-between mt-2 text-sm">
                                        <span className="text-[#9CA3AF]">{edu.period}</span>
                                        <span className="text-[#22D3EE] font-medium">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-[#F5F5F5] mb-4 flex items-center gap-2">
                            <Icons.Award />
                            Certifications & Training
                        </h3>
                        <div className="space-y-3">
                            {DATA.certifications.map((cert, i) => (
                                <div key={i} className="flex items-start gap-3 bg-[#0D1117] p-4 rounded-xl border border-white/5 card-hover card-border-glow">
                                    <span className="text-[#6C63FF] mt-0.5"><Icons.Check /></span>
                                    <span className="text-sm text-[#F5F5F5]">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Achievements = () => {
    const ref = useRef(null);
    useReveal(ref);
    return (
        <section id="achievements" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10">
                    <h2 className="section-title text-3xl md:text-4xl font-bold text-[#F5F5F5]">
                        Achievements <span className="gradient-text">& Extracurriculars</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {DATA.achievements.map((achievement, i) => (
                        <div key={i} className="bg-[#0D1117] p-6 rounded-2xl border border-white/5 card-hover card-border-glow flex items-start gap-4">
                            <span className="text-3xl">🏀</span>
                            <div>
                                <p className="text-[#F5F5F5] leading-relaxed text-sm">{achievement}</p>
                            </div>
                        </div>
                    ))}
                    <div className="bg-[#0D1117] p-6 rounded-2xl border border-white/5 card-hover card-border-glow flex items-start gap-4">
                        <span className="text-3xl">🌐</span>
                        <div>
                            <p className="text-[#F5F5F5] leading-relaxed text-sm">
                                <strong>Languages: </strong> {DATA.languages.join(' · ')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const ref = useRef(null);
    useReveal(ref);
    return (
        <section id="contact" ref={ref} className="reveal py-20 px-6 md:px-8 bg-[#0D1117] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="section-title inline-block text-3xl md:text-4xl font-bold text-center text-[#F5F5F5]">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="mt-3 text-[#9CA3AF]">I'm always open to new opportunities and collaborations.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-[#0D1117] rounded-2xl p-8 md:p-10 border border-white/5 card-border-glow">
                    <div className="space-y-5">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300">
                            <span className="p-3 rounded-xl bg-[#6C63FF]/20 text-[#6C63FF]">
                                <Icons.Mail />
                            </span>
                            <div>
                                <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">Email</p>
                                <a href={`mailto:${DATA.email}`} className="text-[#F5F5F5] hover:text-[#6C63FF] transition-colors">
                                    {DATA.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300">
                            <span className="p-3 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE]">
                                <Icons.Location />
                            </span>
                            <div>
                                <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">Location</p>
                                <p className="text-[#F5F5F5]">{DATA.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300">
                            <span className="p-3 rounded-xl bg-[#6C63FF]/20 text-[#6C63FF]">
                                <Icons.Github />
                            </span>
                            <div>
                                <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">GitHub</p>
                                <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#6C63FF] transition-colors">
                                    github.com/pidekarPrajwal
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#6C63FF]/30 transition-all duration-300">
                            <span className="p-3 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE]">
                                <Icons.LinkedIn />
                            </span>
                            <div>
                                <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">LinkedIn</p>
                                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#6C63FF] transition-colors">
                                    linkedin.com/in/prajwal-pidekar
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href={DATA.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                            >
                                <Icons.Download />
                                View Full Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-8 px-6 md:px-8 border-t border-white/5 bg-[#0D1117]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#9CA3AF]">
                © {new Date().getFullYear()} {DATA.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#6C63FF] transition-colors">
                    <Icons.Github />
                </a>
                <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#6C63FF] transition-colors">
                    <Icons.LinkedIn />
                </a>
                <a href="#hero" className="text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors text-sm">
                    Back to top
                </a>
            </div>
        </div>
    </footer>
);

// --- Main App ---
const App = () => (
    <div className="min-h-screen bg-[#0D1117]">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
    </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
