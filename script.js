
document.addEventListener('DOMContentLoaded', () => {
    const animateText = document.querySelectorAll('.animate-text');
    
    animateText.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            motion.animate(element, {
                opacity: 1,
                transform: 'translateY(0px)'
            }, {
                duration: 0.8,
                delay: index * 0.2,
                easing: 'ease-out'
            });
        }, 100);
    });
});

// Wait for Motion One to be available
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

// Add event listener on click to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// React Components
const ProjectCard = ({ title, description, tech, github }) => (
    <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
            {tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
            ))}
        </div>
        <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
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
        <div className="projects-grid">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

// Theme toggle functionality
const THEME_KEY = 'theme-preference';

// Function to set theme
function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    window.localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    console.log('Theme set to:', isDark ? 'dark' : 'light'); // Debug log
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = window.localStorage.getItem(THEME_KEY) || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme === 'dark');
    console.log('Theme toggled to:', newTheme); // Debug log
}

// Function to initialize theme
function initTheme() {
    const savedTheme = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Use saved theme or system preference
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setTheme(isDark);
    console.log('Theme initialized as:', isDark ? 'dark' : 'light'); // Debug log
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
    // Add click event listener to theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle button initialized'); // Debug log
    } else {
        console.warn('Theme toggle button not found!');
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!window.localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches);
    }
});

// Initialize animations
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