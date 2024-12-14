// Theme toggle functionality
const THEME_KEY = 'theme-preference';
const themeToggle = document.getElementById('theme-toggle');

// Function to set theme
function setTheme(isDark) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    
    // Update aria-label for accessibility
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Function to toggle theme
function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    setTheme(!isDark);
}

// Function to initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setTheme(isDark);
}

// Initialize theme immediately
initTheme();

// Add theme toggle button listener
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent menu from closing on mobile
        toggleTheme();
    });
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches);
    }
});

// Add event listener on click to theme toggle button
document.getElementById('theme-toggle').removeEventListener('click', toggleTheme);

// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu li a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links li a');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// React Components
const ProjectCard = ({ title, description, tech, github }) => (
    <div className="project-card" style={{ color: 'var(--text-color)' }}>
        <h3 style={{ color: 'var(--text-color)' }}>{title}</h3>
        <p style={{ color: 'var(--text-color)' }}>{description}</p>
        <div className="tech-stack">
            {tech.map((t, i) => (
                <span key={i} className="tech-tag" style={{ color: 'var(--text-color)' }}>{t}</span>
            ))}
        </div>
        <div className="project-links">
            <a href={github} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="github-link"
               style={{ color: 'var(--text-color)' }}>
                <svg className="github-icon" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
            </a>
        </div>
    </div>
);

const ProjectsGrid = () => {
    const projects = [
        {
            title: "Password Manager",
            description: "A secure password management application built with TypeScript and modern encryption standards.",
            tech: ["TypeScript", "React", "Node.js", "Encryption"],
            github: "https://github.com/SophaHum/password-manager"
        },
        {
            title: "Real-Time Chat",
            description: "Real-time chat application with instant messaging capabilities.",
            tech: ["PHP", "WebSocket", "MySQL", "JavaScript"],
            github: "https://github.com/SophaHum/Real-Time-Chat"
        },
        {
            title: "User Management Application",
            description: "Full-stack user management system built with Golang and Next.js.",
            tech: ["Golang", "Next.js", "TypeScript", "PostgreSQL"],
            github: "https://github.com/SophaHum/Golang-NextJs_User_Management_Applicationa"
        },
        {
            title: "Learning Hub",
            description: "Educational platform for online learning and course management.",
            tech: ["TypeScript", "React", "Node.js", "MongoDB"],
            github: "https://github.com/SophaHum/learning-hub"
        },
        {
            title: "Laravel React Integration",
            description: "Full-stack web application showcasing Laravel and React integration.",
            tech: ["PHP", "Laravel", "React", "MySQL"],
            github: "https://github.com/SophaHum/learning-lara-react"
        },
        {
            title: "Vue.js CRUD with Supabase",
            description: "CRUD application built with Vue.js and Supabase backend.",
            tech: ["Vue.js", "Supabase", "JavaScript", "SQL"],
            github: "https://github.com/SophaHum/crud-supabase-vue-js"
        }
    ];

    return (
        <div className="projects-grid" style={{ color: 'var(--text-color)' }}>
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

// Initialize animations
const initializeAnimations = () => {
    if (!window.motionOne) {
        setTimeout(initializeAnimations, 100);
        return;
    }

    const { animate } = window.motionOne;

    // Hero section animations
    animate('.hero h1', 
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, delay: 0.2 }
    );
    
    animate('.hero h2',
        { opacity: [0, 1], y: [30, 0] },
        { duration: 1, delay: 0.4 }
    );

    // Scroll animations
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target, 
                    { opacity: [0, 1], y: [50, 0] },
                    { duration: 0.8 }
                );
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1
    });

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
};

initializeAnimations();

// Render React components
ReactDOM.render(
    <ProjectsGrid />,
    document.getElementById('projects-root')
);

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Update URL hash without triggering scroll
            history.pushState(null, '', targetId);
            
            // Smooth scroll to section
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Handle direct navigation or back/forward
window.addEventListener('hashchange', (e) => {
    e.preventDefault();
    const targetId = window.location.hash;
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
});

// Add body scroll lock CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        body.no-scroll {
            overflow: hidden;
        }
    </style>
`);