document.addEventListener('DOMContentLoaded', function() {
    // Initialize booking and hiring functionality
    initializeBookingButtons();
    initializeServiceButtons();
    setupNavigation();
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