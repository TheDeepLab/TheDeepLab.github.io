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
            <div class="hidden md:flex items-center space-x-8">
                <a href="/#features" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition">Features</a>
                <a href="/#benefits" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition">Benefits</a>
                <a href="/#contact" class="block px-3 py-2 text-indigo-600 font-medium hover:bg-indigo-50 transition">Contact Us</a>
            </div>
            <div class="md:hidden">
                <button id="mobile-menu-button" class="text-gray-500 hover:text-indigo-600 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/#features" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition">Features</a>
                <a href="/#benefits" class="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition">Benefits</a>
                <a href="/#contact" class="block px-3 py-2 text-indigo-600 font-medium hover:bg-indigo-50 transition">Contact Us</a>
            </div>
        </div>
    </nav>
    `;
    
    headerContainer.innerHTML = headerHtml;
    initializeMobileMenu();
}

// Function to inject the footer HTML
function injectFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;
    
    const currentYear = new Date().getFullYear();
    
    const footerHtml = `
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="text-2xl font-bold text-white">TheDeepLab</a>
                    <p class="mt-2 text-gray-400">
                        AI agent based lead generation and customer conversion solutions
                    </p>
                </div>
                <div class="flex space-x-6">
                    <a href="#" class="text-gray-400 hover:text-white transition">
                        <i class="fab fa-twitter text-xl"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-white transition">
                        <i class="fab fa-linkedin text-xl"></i>
                    </a>
                </div>
            </div>
            <hr class="border-gray-700 my-8">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400 text-sm">
                    &copy; ${currentYear} The Deep Lab, Inc.
                </p>
                <div class="mt-4 md:mt-0">
                    <ul class="flex space-x-8">
                        <li><a href="privacy-policy.html" class="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a></li>
                        <li><a href="terms-of-service.html" class="text-gray-400 hover:text-white text-sm transition">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    footerContainer.innerHTML = footerHtml;
}

// Initialize the mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Initialize components when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    injectHeader();
    injectFooter();
});