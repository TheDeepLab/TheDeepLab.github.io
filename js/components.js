// Components inline loader script with direct HTML content

// Function to inject the header HTML
function injectHeader() {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;
    
    const headerHtml = `
    <!-- Navigation -->
    <nav class="fixed w-full z-10 bg-white bg-opacity-95 shadow-sm">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <div class="flex items-center">
                <a href="/" class="text-2xl font-bold text-indigo-600">TheDeepLab</a>
            </div>
            <div class="flex items-center space-x-8">
                <a href="https://archet.ai" target="_blank" rel="noopener noreferrer" class="block px-3 py-2 text-indigo-600 font-medium hover:bg-indigo-50 transition">Visit Archet.ai</a>
            </div>
        </div>
    </nav>
    `;
    
    headerContainer.innerHTML = headerHtml;
}

// Function to inject the footer HTML
function injectFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;
    
    const currentYear = new Date().getFullYear();
    
    const footerHtml = `
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-6">
            <div class="text-center">
                <p class="text-gray-400 text-sm">
                    &copy; ${currentYear} The Deep Lab, Inc.
                </p>
            </div>
        </div>
    </footer>
    `;
    
    footerContainer.innerHTML = footerHtml;
}

// Initialize components when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    injectHeader();
    injectFooter();
});
