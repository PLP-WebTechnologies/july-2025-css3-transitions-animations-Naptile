// =========================
// Global Variables
// =========================
const box = document.querySelector('.box');
const modal = document.querySelector('.modal');
const animateBtn = document.querySelector('#animateBtn');
const modalBtn = document.querySelector('#modalBtn');

// =========================
// Function: Toggle Animation
// =========================
function togglePulseAnimation(element) {
    // Local scope variable
    let isAnimating = element.classList.contains('pulse-animation');
    
    if (isAnimating) {
        element.classList.remove('pulse-animation');
    } else {
        element.classList.add('pulse-animation');
    }
    
    // Return the current animation state
    return !isAnimating;
}

// =========================
// Function: Show Modal
// =========================
function toggleModal(modalElement) {
    const isVisible = modalElement.classList.contains('show');
    modalElement.classList.toggle('show');
    return !isVisible;
}

// =========================
// Event Listeners
// =========================
animateBtn.addEventListener('click', function() {
    const state = togglePulseAnimation(box);
    console.log(`Box animation active: ${state}`);
});

modalBtn.addEventListener('click', function() {
    const state = toggleModal(modal);
    console.log(`Modal visible: ${state}`);
});
