let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}



const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

// Email Validation
emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const isValid = /\@.+\..{2,}/.test(email); // Checks if there's a dot and at least 2 characters after @
    const isValidAfterAt = email.indexOf('@') !== -1 && email.substring(email.indexOf('@') + 1).length > 2; // Ensures there are more than 2 characters after @

    if (!isValid || !isValidAfterAt) {
        emailError.textContent = 'გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!';
    } else {
        emailError.textContent = '';
    }
});

// Password Strength Checker
function checkPasswordStrength(password) {
    let message = '';
    let color = '';

    // Check password strength
    if (/^[a-zA-Z]+$/.test(password)) {
        message = 'სუსტი';
        color = '#e1216d'; // Red
    } else if (/^[a-zA-Z0-9]+$/.test(password)) {
        message = 'საშუალო';
        color = '#FFA500'; // Orange
    } else if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
        message = 'ძლიერი';
        color = '#4CAF50'; // Green
    }

    return { message, color };
}

// Real-time Password Validation
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const { message, color } = checkPasswordStrength(password);

    passwordError.textContent = message;
    passwordError.style.color = color;
});

// Form Submission Handler
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission to check validation

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate Email
    const isValidEmail = /\@.+\..{2,}/.test(email);
    const isValidEmailAfterAt = email.indexOf('@') !== -1 && email.substring(email.indexOf('@') + 1).length > 2;

    if (!isValidEmail || !isValidEmailAfterAt) {
        alert('გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!');
        return;
    }

    // Check password strength
    const { message, color } = checkPasswordStrength(password);

    if (message !== 'ძლიერი') {
        alert('პაროლი არ არის საკმარისად ძლიერი!');
        return;
    }

    alert('რეგისტრაცია წარმატებით დასრულდა');
    // Form submission or further processing can happen here
    form.submit(); // Un-comment this line to submit the form after validation
});













    