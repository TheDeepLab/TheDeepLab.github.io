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
    
    // Add Google Analytics
    function initializeAnalytics() {
        // Google Analytics tracking code
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-J2E415S683');
    }
    
    // Initialize analytics
    initializeAnalytics();
});