document.addEventListener('DOMContentLoaded', function() {
    // Initialize booking and hiring functionality
    initializeBookingButtons();
    initializeServiceButtons();
    setupNavigation();
    init();
});

function initializeBookingButtons() {
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventCard = this.closest('.event-card');
            const eventName = eventCard.querySelector('h3').textContent;
            const eventDate = eventCard.querySelector('.date').textContent;
            
            showBookingModal(eventName, eventDate);
        });
    });
}

function initializeServiceButtons() {
    const hireButtons = document.querySelectorAll('.hire-btn');
    hireButtons.forEach(button => {
        button.addEventListener('click', function() {
            const serviceCard = this.closest('.service-card');
            const serviceName = serviceCard.querySelector('h3').textContent;
            
            showServiceModal(serviceName);
        });
    });
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function showBookingModal(eventName, eventDate) {
    const modal = createModal(`
        <h2>Book Event: ${eventName}</h2>
        <p>Date: ${eventDate}</p>
        <form id="bookingForm">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" required>
            </div>
            <div class="form-group">
                <label for="guests">Number of Guests</label>
                <input type="number" id="guests" min="1" value="1" required>
            </div>
            <button type="submit" class="submit-btn">Confirm Booking</button>
        </form>
    `);
    
    const form = modal.querySelector('#bookingForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the booking data to your backend
        alert('Booking submitted successfully! We will contact you shortly.');
        modal.remove();
    });
}

function showServiceModal(serviceName) {
    const modal = createModal(`
        <h2>Hire Service: ${serviceName}</h2>
        <form id="serviceForm">
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" required>
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" id="address" required>
            </div>
            <div class="form-group">
                <label for="preferredDate">Preferred Date</label>
                <input type="date" id="preferredDate" required>
            </div>
            <div class="form-group">
                <label for="notes">Additional Notes</label>
                <textarea id="notes" rows="4"></textarea>
            </div>
            <button type="submit" class="submit-btn">Request Service</button>
        </form>
    `);
    
    const form = modal.querySelector('#serviceForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the service request data to your backend
        alert('Service request submitted successfully! We will contact you shortly.');
        modal.remove();
    });
}

function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            ${content}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => modal.remove());
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    return modal;
}

// Add modal styles dynamically
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        background-color: white;
        padding: 30px;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        position: relative;
    }
    
    .close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 24px;
        cursor: pointer;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .submit-btn {
        width: 100%;
        padding: 12px;
        font-size: 18px;
    }
`;
document.head.appendChild(style);

// DOM Elements
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');
const mainNav = document.querySelector('.main-nav');
const mobileMenuButton = document.createElement('button');
const topBar = document.querySelector('.top-bar');
const heroSection = document.querySelector('.hero');
const serviceCards = document.querySelectorAll('.service-card');
const eventCards = document.querySelectorAll('.event-card');

// Mobile Menu Toggle
function createMobileMenu() {
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.setAttribute('aria-label', 'Toggle Menu');
    document.querySelector('.header-content').appendChild(mobileMenuButton);

    mobileMenuButton.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
}

// Search Functionality
function setupSearch() {
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // In a real implementation, this would make an API call
            console.log('Searching for:', searchTerm);
            // For demo purposes, we'll just show an alert
            alert(`Searching for: ${searchTerm}`);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Card Hover Effects
function setupCardHoverEffects() {
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });
}

// Dynamic Content Loading
function setupDynamicContent() {
    // Simulate loading featured services
    const services = [
        {
            icon: 'fa-heartbeat',
            title: 'Health & Wellness',
            description: 'Access to health resources and wellness programs'
        },
        {
            icon: 'fa-home',
            title: 'Home Care',
            description: 'Professional assistance with daily activities'
        },
        {
            icon: 'fa-calendar-alt',
            title: 'Events',
            description: 'Community events and social gatherings'
        }
    ];

    // Simulate loading upcoming events
    const events = [
        {
            month: 'JUN',
            day: '15',
            title: 'Community Social',
            description: 'Join us for an afternoon of socializing and light refreshments'
        },
        {
            month: 'JUN',
            day: '20',
            title: 'Health & Wellness Workshop',
            description: 'Learn about maintaining a healthy lifestyle'
        }
    ];
}

// Accessibility Features
function setupAccessibility() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add ARIA labels
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
}

// Initialize all functionality
function init() {
    createMobileMenu();
    setupSearch();
    setupSmoothScrolling();
    setupCardHoverEffects();
    setupDynamicContent();
    setupAccessibility();
} 