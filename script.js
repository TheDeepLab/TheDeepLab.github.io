// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Redirect from PRD.md or any unwanted URLs
    const blockedPaths = ['PRD.md', '.git', '.htaccess'];
    const currentPath = window.location.pathname;
    
    // Only redirect if the path EXACTLY matches a blocked path, not just contains it
    if (blockedPaths.some(path => currentPath === '/' + path)) {
        window.location.href = '/404.html';
    }
    
    // Handle 404 for broken links - only for links that definitely don't exist
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        // Only process links that have an href attribute and aren't hashtag links
        if (link && link.getAttribute('href') && !link.getAttribute('href').startsWith('#')) {
            const href = link.getAttribute('href');
            // Check if it's a path that should be blocked
            if (blockedPaths.some(path => href === '/' + path || href === path)) {
                e.preventDefault();
                window.location.href = '/404.html';
            }
        }
    });
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !company || !message) {
                alert('Please fill out all fields');
                return;
            }
            
            // Create the email body
            const emailBody = `Hi, I would like to know more about your solutions and request a demo.

${message}

${name}
${company}`;
            
            // Create the mailto URL with all parameters
            const mailtoURL = `mailto:info@thedeeplab.ai?subject=Request a demo!&body=${encodeURIComponent(emailBody)}&from=${encodeURIComponent(email)}`;
            
            // Open the default email client
            window.location.href = mailtoURL;
            
            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 500);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes on scroll
    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // How many pixels of the element should be visible
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Add Google Analytics
    function initializeAnalytics() {
        // This would typically be replaced with your actual Google Analytics or other tracking code
        console.log('Analytics initialized');
        
        // Example Google Analytics code (replace with your actual GA code)
        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
        */
    }
    
    // Initialize analytics
    initializeAnalytics();
});