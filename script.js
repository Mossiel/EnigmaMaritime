// Enigma Maritime - Main JavaScript File

// Translation objects for multilingual support
const translations = {
    en: {
        // Page meta
        'page.title': 'Enigma Maritime - Latin America\'s Trusted Partner in Cargo Inspection',
        'page.description': 'Certified maritime services across the Caribbean - Quality, Precision, Compliance. Founded in 2011 in Dominican Republic.',
        
        // Navigation
        'nav.logo': 'Enigma Maritime',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.labs': 'Labs',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Latin America\'s Trusted Partner in Cargo Inspection, Inventory Control, and Laboratory Services',
        'hero.subtitle': 'Certified services across the Caribbean – Quality. Precision. Compliance.',
        'hero.cta.learn': 'Learn More',
        'hero.cta.request': 'Request Service',
        
        // About Section
        'about.title': 'About Enigma Maritime',
        'about.founded.title': 'Founded in 2011',
        'about.founded.description': 'Established in the Dominican Republic, we have grown to become a leading provider of maritime inspection and laboratory services across Latin America and the Caribbean.',
        'about.presence.title': 'International Presence',
        'about.presence.description': 'With offices and laboratories across multiple countries, we provide comprehensive coverage and local expertise to serve our clients\' needs throughout the region.',
        'about.certification.title': 'ISO Certified Excellence',
        'about.certification.description': 'Our commitment to quality is demonstrated through our ISO certifications and adherence to international standards including API, ASTM, and IFIA protocols.',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive maritime and laboratory services designed to meet the highest industry standards',
        'services.qq.title': 'Q&Q Inspection',
        'services.qq.description': 'Real-time cargo supervision and legal certification based on API, ASTM, and IFIA standards. Ensuring quantity and quality compliance for all maritime operations.',
        'services.lab.title': 'Laboratory Analysis',
        'services.lab.description': '24/7 physical-chemical analysis of hydrocarbons, petrochemicals, agriculture, and minerals with advanced testing equipment and certified procedures.',
        'services.fiscal.title': 'Fiscal Control',
        'services.fiscal.description': 'Fuel quantity and quality verification, subsidy validation, and strategic statistical reporting for government and regulatory compliance.',
        'services.loss.title': 'Loss Control',
        'services.loss.description': 'Client representation with real-time reports and comprehensive terminal evaluations to minimize losses and maximize operational efficiency.',
        'services.inventory.title': 'Inventory Control',
        'services.inventory.description': 'Tank and pipeline volume measurements, reconciliation services, and transfer book maintenance for accurate inventory management.',
        'services.logistics.title': 'Logistics & Warehousing',
        'services.logistics.description': 'Complete storage, stevedoring, customs, and port services with expert import/export consulting for seamless operations.',
        
        // Labs Section
        'labs.title': 'Laboratory Network & Coverage',
        'labs.network.title': 'Strategic Laboratory Locations',
        'labs.locations.aruba': 'Aruba - Full-service laboratory',
        'labs.locations.bonaire': 'Bonaire - Advanced testing facility',
        'labs.locations.eustatius': 'St. Eustatius - Regional analysis center',
        'labs.locations.dominican': 'Dominican Republic - Headquarters laboratory',
        'labs.availability.title': '24/7 Service Availability',
        'labs.availability.description': 'Our laboratories operate around the clock with advanced testing equipment and certified technicians to provide rapid, accurate results when you need them most.',
        
        // Offices Section
        'offices.title': 'International Offices',
        'offices.subtitle': 'Global presence with local expertise across Latin America and the Caribbean',
        'offices.dominican.country': 'Dominican Republic',
        'offices.dominican.address': 'Santo Domingo, Headquarters',
        'offices.aruba.country': 'Aruba',
        'offices.aruba.address': 'Oranjestad, Main Laboratory',
        'offices.bonaire.country': 'Bonaire',
        'offices.bonaire.address': 'Kralendijk, Testing Facility',
        'offices.panama.country': 'Panama',
        'offices.panama.address': 'Panama City, Regional Office',
        'offices.venezuela.country': 'Venezuela',
        'offices.venezuela.address': 'Caracas, Branch Office',
        'offices.costarica.country': 'Costa Rica',
        'offices.costarica.address': 'San José, Regional Office',
        'offices.argentina.country': 'Argentina',
        'offices.argentina.address': 'Buenos Aires, South Office',
        'offices.uruguay.country': 'Uruguay',
        'offices.uruguay.address': 'Montevideo, Branch Office',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Ready to discuss your maritime service needs? Get in touch with our experts today.',
        'contact.form.name': 'Full Name',
        'contact.form.name.placeholder': 'Enter your full name',
        'contact.form.email': 'Email Address',
        'contact.form.email.placeholder': 'Enter your email address',
        'contact.form.phone': 'Phone Number',
        'contact.form.phone.placeholder': 'Enter your phone number',
        'contact.form.service': 'Service Needed',
        'contact.form.service.select': 'Select a service',
        'contact.form.service.qq': 'Q&Q Inspection',
        'contact.form.service.lab': 'Laboratory Analysis',
        'contact.form.service.fiscal': 'Fiscal Control',
        'contact.form.service.loss': 'Loss Control',
        'contact.form.service.inventory': 'Inventory Control',
        'contact.form.service.logistics': 'Logistics & Warehousing',
        'contact.form.message': 'Message',
        'contact.form.message.placeholder': 'Tell us about your requirements and how we can help you',
        'contact.form.submit': 'Send Message',
        'contact.form.success': 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        'contact.info.title': 'Get in Touch',
        'contact.info.email.title': 'Email Us',
        'contact.info.phone.title': 'Call Us',
        'contact.info.phone.hours': '24/7 Emergency Services Available',
        'contact.info.address.title': 'Visit Us',
        'contact.info.address.line1': 'Enigma Maritime Headquarters',
        'contact.info.address.line2': 'Santo Domingo, Dominican Republic',
        'contact.info.social.title': 'Follow Us',
        
        // Footer
        'footer.logo': 'Enigma Maritime',
        'footer.description': 'Latin America\'s trusted partner in cargo inspection, inventory control, and laboratory services since 2011.',
        'footer.links.title': 'Quick Links',
        'footer.links.home': 'Home',
        'footer.links.about': 'About',
        'footer.links.services': 'Services',
        'footer.links.labs': 'Labs',
        'footer.links.contact': 'Contact',
        'footer.services.title': 'Services',
        'footer.services.qq': 'Q&Q Inspection',
        'footer.services.lab': 'Laboratory Analysis',
        'footer.services.fiscal': 'Fiscal Control',
        'footer.services.loss': 'Loss Control',
        'footer.services.inventory': 'Inventory Control',
        'footer.services.logistics': 'Logistics & Warehousing',
        'footer.contact.title': 'Contact Info',
        'footer.contact.address': 'Santo Domingo, Dominican Republic',
        'footer.copyright': '© 2024 Enigma Maritime. All rights reserved.'
    },
    
    es: {
        // Page meta
        'page.title': 'Enigma Maritime - Socio de Confianza de América Latina en Inspección de Carga',
        'page.description': 'Servicios marítimos certificados en el Caribe - Calidad, Precisión, Cumplimiento. Fundada en 2011 en República Dominicana.',
        
        // Navigation
        'nav.logo': 'Enigma Maritime',
        'nav.home': 'Inicio',
        'nav.about': 'Nosotros',
        'nav.services': 'Servicios',
        'nav.labs': 'Laboratorios',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title': 'Socio de Confianza de América Latina en Inspección de Carga, Control de Inventario y Servicios de Laboratorio',
        'hero.subtitle': 'Servicios certificados en el Caribe – Calidad. Precisión. Cumplimiento.',
        'hero.cta.learn': 'Conocer Más',
        'hero.cta.request': 'Solicitar Servicio',
        
        // About Section
        'about.title': 'Acerca de Enigma Maritime',
        'about.founded.title': 'Fundada en 2011',
        'about.founded.description': 'Establecida en República Dominicana, hemos crecido para convertirnos en un proveedor líder de servicios de inspección marítima y laboratorio en América Latina y el Caribe.',
        'about.presence.title': 'Presencia Internacional',
        'about.presence.description': 'Con oficinas y laboratorios en múltiples países, brindamos cobertura integral y experiencia local para satisfacer las necesidades de nuestros clientes en toda la región.',
        'about.certification.title': 'Excelencia Certificada ISO',
        'about.certification.description': 'Nuestro compromiso con la calidad se demuestra a través de nuestras certificaciones ISO y adherencia a estándares internacionales incluyendo protocolos API, ASTM e IFIA.',
        
        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Servicios marítimos y de laboratorio integrales diseñados para cumplir con los más altos estándares de la industria',
        'services.qq.title': 'Inspección Q&Q',
        'services.qq.description': 'Supervisión de carga en tiempo real y certificación legal basada en estándares API, ASTM e IFIA. Garantizando el cumplimiento de cantidad y calidad para todas las operaciones marítimas.',
        'services.lab.title': 'Análisis de Laboratorio',
        'services.lab.description': 'Análisis físico-químico 24/7 de hidrocarburos, petroquímicos, agricultura y minerales con equipos de prueba avanzados y procedimientos certificados.',
        'services.fiscal.title': 'Control Fiscal',
        'services.fiscal.description': 'Verificación de cantidad y calidad de combustible, validación de subsidios y reportes estadísticos estratégicos para cumplimiento gubernamental y regulatorio.',
        'services.loss.title': 'Control de Pérdidas',
        'services.loss.description': 'Representación de clientes con reportes en tiempo real y evaluaciones terminales integrales para minimizar pérdidas y maximizar la eficiencia operacional.',
        'services.inventory.title': 'Control de Inventario',
        'services.inventory.description': 'Mediciones de volumen de tanques y tuberías, servicios de reconciliación y mantenimiento de libros de transferencia para gestión precisa de inventario.',
        'services.logistics.title': 'Logística y Almacenamiento',
        'services.logistics.description': 'Servicios completos de almacenamiento, estiba, aduanas y puerto con consultoría experta en importación/exportación para operaciones sin problemas.',
        
        // Labs Section
        'labs.title': 'Red de Laboratorios y Cobertura',
        'labs.network.title': 'Ubicaciones Estratégicas de Laboratorios',
        'labs.locations.aruba': 'Aruba - Laboratorio de servicio completo',
        'labs.locations.bonaire': 'Bonaire - Instalación de pruebas avanzadas',
        'labs.locations.eustatius': 'St. Eustatius - Centro de análisis regional',
        'labs.locations.dominican': 'República Dominicana - Laboratorio sede',
        'labs.availability.title': 'Disponibilidad de Servicio 24/7',
        'labs.availability.description': 'Nuestros laboratorios operan las 24 horas con equipos de prueba avanzados y técnicos certificados para proporcionar resultados rápidos y precisos cuando más los necesite.',
        
        // Offices Section
        'offices.title': 'Oficinas Internacionales',
        'offices.subtitle': 'Presencia global con experiencia local en América Latina y el Caribe',
        'offices.dominican.country': 'República Dominicana',
        'offices.dominican.address': 'Santo Domingo, Sede Principal',
        'offices.aruba.country': 'Aruba',
        'offices.aruba.address': 'Oranjestad, Laboratorio Principal',
        'offices.bonaire.country': 'Bonaire',
        'offices.bonaire.address': 'Kralendijk, Instalación de Pruebas',
        'offices.panama.country': 'Panamá',
        'offices.panama.address': 'Ciudad de Panamá, Oficina Regional',
        'offices.venezuela.country': 'Venezuela',
        'offices.venezuela.address': 'Caracas, Oficina Sucursal',
        'offices.costarica.country': 'Costa Rica',
        'offices.costarica.address': 'San José, Oficina Regional',
        'offices.argentina.country': 'Argentina',
        'offices.argentina.address': 'Buenos Aires, Oficina Sur',
        'offices.uruguay.country': 'Uruguay',
        'offices.uruguay.address': 'Montevideo, Oficina Sucursal',
        
        // Contact Section
        'contact.title': 'Contáctanos',
        'contact.subtitle': '¿Listo para discutir sus necesidades de servicios marítimos? Póngase en contacto con nuestros expertos hoy.',
        'contact.form.name': 'Nombre Completo',
        'contact.form.name.placeholder': 'Ingrese su nombre completo',
        'contact.form.email': 'Dirección de Email',
        'contact.form.email.placeholder': 'Ingrese su dirección de email',
        'contact.form.phone': 'Número de Teléfono',
        'contact.form.phone.placeholder': 'Ingrese su número de teléfono',
        'contact.form.service': 'Servicio Requerido',
        'contact.form.service.select': 'Seleccione un servicio',
        'contact.form.service.qq': 'Inspección Q&Q',
        'contact.form.service.lab': 'Análisis de Laboratorio',
        'contact.form.service.fiscal': 'Control Fiscal',
        'contact.form.service.loss': 'Control de Pérdidas',
        'contact.form.service.inventory': 'Control de Inventario',
        'contact.form.service.logistics': 'Logística y Almacenamiento',
        'contact.form.message': 'Mensaje',
        'contact.form.message.placeholder': 'Cuéntenos sobre sus requerimientos y cómo podemos ayudarle',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.form.success': '¡Gracias! Su mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.',
        'contact.info.title': 'Póngase en Contacto',
        'contact.info.email.title': 'Envíenos un Email',
        'contact.info.phone.title': 'Llámenos',
        'contact.info.phone.hours': 'Servicios de Emergencia 24/7 Disponibles',
        'contact.info.address.title': 'Visítenos',
        'contact.info.address.line1': 'Sede de Enigma Maritime',
        'contact.info.address.line2': 'Santo Domingo, República Dominicana',
        'contact.info.social.title': 'Síguenos',
        
        // Footer
        'footer.logo': 'Enigma Maritime',
        'footer.description': 'Socio de confianza de América Latina en inspección de carga, control de inventario y servicios de laboratorio desde 2011.',
        'footer.links.title': 'Enlaces Rápidos',
        'footer.links.home': 'Inicio',
        'footer.links.about': 'Nosotros',
        'footer.links.services': 'Servicios',
        'footer.links.labs': 'Laboratorios',
        'footer.links.contact': 'Contacto',
        'footer.services.title': 'Servicios',
        'footer.services.qq': 'Inspección Q&Q',
        'footer.services.lab': 'Análisis de Laboratorio',
        'footer.services.fiscal': 'Control Fiscal',
        'footer.services.loss': 'Control de Pérdidas',
        'footer.services.inventory': 'Control de Inventario',
        'footer.services.logistics': 'Logística y Almacenamiento',
        'footer.contact.title': 'Información de Contacto',
        'footer.contact.address': 'Santo Domingo, República Dominicana',
        'footer.copyright': '© 2024 Enigma Maritime. Todos los derechos reservados.'
    }
};

// Current language state
let currentLanguage = 'en';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-out-cubic'
    });
    
    // Initialize all components
    initializeNavigation();
    initializeLanguageSwitch();
    initializeSmoothScrolling();
    initializeContactForm();
    initializeMobileMenu();
    initializeScrollEffects();
    
    // Set initial language
    updateLanguage(currentLanguage);
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active navigation link based on scroll position
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', updateActiveNav);
    
    // Initial call
    updateActiveNav();
}

// Language switching functionality
function initializeLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn, .footer-lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newLang = this.id.includes('en') ? 'en' : 'es';
            if (newLang !== currentLanguage) {
                updateLanguage(newLang);
            }
        });
    });
}

// Update language function
function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Update language button states
    const langButtons = document.querySelectorAll('.lang-btn, .footer-lang-btn');
    langButtons.forEach(button => {
        button.classList.remove('active');
        if ((lang === 'en' && button.id.includes('en')) || 
            (lang === 'es' && button.id.includes('es'))) {
            button.classList.add('active');
        }
    });
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document title and meta description
    if (translations[lang]['page.title']) {
        document.title = translations[lang]['page.title'];
    }
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translations[lang]['page.description']) {
        metaDescription.setAttribute('content', translations[lang]['page.description']);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = currentLanguage === 'en' ? 'Sending...' : 'Enviando...';
                submitButton.disabled = true;
                submitButton.classList.add('loading');
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Reset form
                    form.reset();
                    
                    // Show success message
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('success-fade-in');
                    
                    // Reset button
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.classList.remove('loading');
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.add('hidden');
                        successMessage.classList.remove('success-fade-in');
                    }, 5000);
                    
                    // Log form data (for development)
                    console.log('Form submitted:', data);
                }, 2000);
            }
        });
    }
}

// Form validation
function validateForm(data) {
    const errors = {};
    
    // Required field validation
    if (!data.name || data.name.trim().length < 2) {
        errors.name = currentLanguage === 'en' ? 'Name must be at least 2 characters long' : 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.email = currentLanguage === 'en' ? 'Please enter a valid email address' : 'Por favor ingrese una dirección de email válida';
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.message = currentLanguage === 'en' ? 'Message must be at least 10 characters long' : 'El mensaje debe tener al menos 10 caracteres';
    }
    
    // Display errors
    displayFormErrors(errors);
    
    return Object.keys(errors).length === 0;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Display form errors
function displayFormErrors(errors) {
    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.remove());
    
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    inputs.forEach(input => {
        input.classList.remove('form-error');
    });
    
    // Display new errors
    Object.keys(errors).forEach(field => {
        const input = document.querySelector(`#${field}`);
        if (input) {
            input.classList.add('form-error');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = errors[field];
            
            input.parentNode.appendChild(errorDiv);
        }
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('mobile-menu-enter');
                
                setTimeout(() => {
                    mobileMenu.classList.add('mobile-menu-enter-active');
                }, 10);
            } else {
                mobileMenu.classList.remove('mobile-menu-enter-active');
                
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('mobile-menu-enter');
                }, 300);
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && 
                !mobileMenu.contains(event.target) && 
                !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Scroll effects
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll-dependent operations here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    // ESC key closes mobile menu
    if (event.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// Focus management for accessibility
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .office-card');
    animatedElements.forEach(el => observer.observe(el));
});

// Loading state management
function showLoading(element) {
    element.classList.add('loading');
    element.disabled = true;
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.disabled = false;
}

// Error handling
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    // You can implement error reporting here
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    // You can implement error reporting here
});

// Service worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Analytics and tracking (placeholder)
function trackEvent(category, action, label) {
    // Implement your analytics tracking here
    console.log('Track event:', { category, action, label });
}

// Form submission tracking
document.addEventListener('submit', function(event) {
    if (event.target.id === 'contact-form') {
        trackEvent('Form', 'Submit', 'Contact Form');
    }
});

// Link click tracking
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');
        if (href && href.startsWith('http')) {
            trackEvent('Link', 'Click', href);
        }
    }
});

// Export functions for potential external use
window.EnigmaApp = {
    updateLanguage,
    trackEvent,
    showLoading,
    hideLoading
};
