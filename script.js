// ========================
// DATA CONFIGURATION
// ========================

// Projects Data
const projectsData = [
    {
        title: "Smart Real-Time Rice Disease Detection",
        description: "A Mobile System using SwiftUI and apply Transfer Learning Technique on Deep Learning model InceptionV3 to detect rice disease accurately and provide treatment recommendations to farmers.",
        image: "assets/Project/project_1.jpg",
        status: "Completed",
        statusClass: "status-completed",
        icon: "fas fa-university",
        tags: ["SwiftUI", "Python", "FastAPI", "Docker"],
        projectDetail: "assets/Project/project1_detail.png",
        github: "https://github.com/1ssethDesu/Rice_Disease_ML"
    },
    {
        title: "Dental Detection Disease System",
        description: "An application for detecting dental diseases using Faster-RCNN model, providing predictions with bounding boxes and disease information.",
        image: "assets/Project/project2.jpg",
        status: "Completed",
        statusClass: "status-completed",
        icon: "fas fa-university",
        tags: ["React", "Python", "FastAPI", "OpenCV", "Data Annotation", "Deep Learning", "Docker"],
        projectDetail: "https://github.com/1ssethDesu/denteeth_ML_model",
        github: "https://github.com/1ssethDesu/denteeth_ML_model"
    },
    {
        title: "Email Automation System",
        description: "A FastAPI-based service that detect order emails sent to the Microsoft 365 mailbox via Microsoft Graph Delta Query Converts product items from the attached PDF/HTML body into structured JSON with LLM.",
        image: "assets/Project/project3.png",
        status: "Implementing",
        statusClass: "",
        icon: "fas fa-briefcase",
        tags: ["LLM", "FastAPI", "Microsoft Graph", "Docker", "Pydantic"],
        projectDetail: "#",
        github: "#"
    }
];

// Specialization Data
const specializationData = [
    {
        icon: 'fa-eye',
        title: 'Computer Vision',
        description: 'Image classification<br>Object detection<br>Image segmentation'
    },
    {
        icon: 'fa-brain',
        title: 'Large Language Models',
        description: 'Structured Data Extraction<br>Content Generation & Summarization'
    },
  
    {
        icon: 'fa-cogs',
        title: 'Automation',
        description: 'Automate organisational tasks (Organizational processes, customer services, ...)'
    }
];

// Work Experience Data
const experienceData = [
    {
        date: 'September 2025 — Present',
        companyIcon: '🇳🇱',
        companyLogo: 'assets/suplacon-logo.png'  ,
        title: 'AI Developer Intern',
        company: 'The Suplacon',
        description: 'Currently developing an email pipeline system to automatically classify and extract the structured format inside company ERP system, enabling a more faster and more efficient response handling.',
        achievements: [
            'Improved processing time of the manual review process by more than 90%',
            'Use of an instructor pydantic LLM model to classify and extract structured data from unstructured email body and attachments',
            
        ],
        tags: ['Python', 'PyTorch', 'OCR', 'Email Processing']
    },
    {
        date: 'Oct 2024 — Sep 2025',
        companyIcon: '🇰🇭',
        companyLogo: 'assets/asip_logo.png',
        title: 'Senior Research Officer',
        company: 'Angkor Social Innovation Park',
        description: 'Built an intermediate AI pipeline to automate the processing of Bon de Commande.',
        achievements: [
            'Conducting market research for Cambodian SMEs to drive impactful business growth and creating an innovative blog post based on the findings.',
            'Contributing in the NextGen Project as a mentor for final pitching participants',
        ],
        tags: ['Computer Vision', 'OCR', 'Image Processing', 'Template Matching']
    },
    {
        date: 'Jan — Aug 2025',
        companyIcon: '🇰🇭',
        companyLogo: 'assets/camtech_logo.jpeg'  ,
        title: 'Intern',
        company: 'Cambodia University of Technology and Science (CamTech) ',
        description: 'Executed two deep learning projects focusing on early diagnosis systems: **BotaniScan** (real-time rice disease detection) and a **Dental Detection Disease System**. Applied advanced Computer Vision and Transfer Learning techniques to develop deployable mobile and web applications.',
        achievements: [
            'Developed a **Smart Real-Time Rice Disease Detection** system (BotaniScan) using **Transfer Learning (InceptionV3)** and **SwiftUI** for field diagnosis by farmers.',
        'Designed and implemented a **Dental Detection Disease System** utilizing **Faster R-CNN** for accurate bounding box predictions and classification of multiple dental diseases.',
        'Managed the end-to-end data pipeline, including **data annotation** and creating training datasets for both Object Detection models.',
        'Containerized model deployment using **Docker** and built API backends using **FastAPI** to enable scalable application serving.'
        ],
        tags: ['Digital Transformation', 'Process Optimization', 'Automation']
    }
];


// ========================
// RENDER FUNCTIONS
// ========================

function generateProjectCards() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-status ${project.statusClass}">${project.status}</span>
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.projectDetail}" class="project-link"><i class="fas fa-external-link-alt"></i> Project Detail</a>
                    <a href="${project.github}" class="project-link"><i class="fab fa-github"></i> GitHub</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderSpecializationCards() {
    const grid = document.getElementById('specialization-grid');
    if (!grid) return;

    grid.innerHTML = specializationData.map(item => `
        <div class="specialization-card">
            <div class="specialization-icon">
                <i class="fas ${item.icon}"></i>
            </div>
            <h3>${item.title.split(' ').slice(0, -1).join(' ')} <span class="highlight">${item.title.split(' ').slice(-1)}</span></h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}


function renderExperienceTimeline() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    function processBoldText(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    timeline.innerHTML = experienceData.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="company-header">
                    <div class="company-logo">
                        ${item.companyIcon}
                    </div>
                    ${item.companyLogo ? `<img src="${item.companyLogo}" alt="${item.company} logo" class="company-brand-logo">` : ''}
                    <div class="company-info">
                        <h3>${item.company}</h3>
                    </div>
                </div>
                
                <div class="job-title">${item.title}</div>
                <div class="timeline-date">${item.date}</div>
                <div class="job-description">${processBoldText(item.description)}</div>
                
                <ul class="job-achievements">
                    ${item.achievements.map(achievement => `
                        <li>${processBoldText(achievement)}</li>
                    `).join('')}
                </ul>
                
            </div>
        </div>
    `).join('');
}


// ========================
// NAVBAR & SCROLL
// ========================
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    // Handle navbar background
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    // Update active navigation link based on scroll position
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    // Find which section is currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === `#${currentSection}` || 
            (currentSection === '' && href === '#home') ||
            (currentSection === 'specialization' && href === '#home')) {
            link.classList.add('active');
        }
    });
}


// Navbar scroll effect
window.addEventListener('scroll', handleNavbarScroll);

// Handle click events on nav links
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') {
                e.preventDefault();
                return;
            }
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to target
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================
// ANIMATION OBSERVERS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer functions
function observeElements(selector, staggerDelay = 0.1) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * staggerDelay}s`;
        observer.observe(element);
    });
}

// ========================
// INITIALIZATION
// ========================

document.addEventListener('DOMContentLoaded', function() {
    // Render dynamic content
    renderSpecializationCards();
    renderExperienceTimeline();
    generateProjectCards();
    
    // Initialize navigation
    initNavigation();
    
    // Set initial active state
    setTimeout(() => {
        updateActiveNavLink();
    }, 100);
    
    // Wait for elements to render, then observe them
    setTimeout(() => {
        observeElements('.specialization-card', 0.1);
        observeElements('.timeline-item', 0.2);
        observeElements('.project-card', 0.1);
        
        // Initialize interactive effects
        initInteractiveEffects();
    }, 100);
});

// Smooth scrolling initialization
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Interactive effects initialization
function initInteractiveEffects() {
    // Tech tags hover effect
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-2px) scale(1.05)';
        });
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
}