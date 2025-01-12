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
const confirmPasswordInput = document.getElementById('confirm_password');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Email validation
emailInput.addEventListener('input', () => {
    emailError.textContent = !/\S+@\S+\.\S+/.test(emailInput.value) ? 'გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!' : '';
});

// Password strength checker
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const message = password.length < 6 ? 'პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს' :
     /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'ძლიერი' :
   /[A-Z0-9]/.test(password) || /[A-Z!@#$%^&*(),.?":{}|<>]/.test(password) || /[0-9!@#$%^&*(),.?":{}|<>]/.test(password) ? 'საშუალო' : 'სუსტი';
    passwordError.textContent = message;
    passwordError.style.color = message === 'ძლიერი' ? '#4CAF50' : message === 'საშუალო' ? '#FFA500' : '#e1216d';
});

// Password match validation
confirmPasswordInput.addEventListener('input', () => {
    confirmPasswordError.textContent = confirmPasswordInput.value !== passwordInput.value ? 'პაროლები არ ემთხვევა' : '';
    confirmPasswordError.style.color = confirmPasswordInput.value !== passwordInput.value ? '#e1216d' : '';
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (![emailInput.value, passwordInput.value, confirmPasswordInput.value].every(val => val)) {
        alert('გთხოვთ შეავსოთ ყველა ველი!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        alert('გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!');
        return;
    }

    const password = passwordInput.value;
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        alert('პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს, 1 დიდ ასოს, 1 ციფრს და 1 სიმბოლოს');
        return;
    }

    if (password !== confirmPasswordInput.value) {
        alert('პაროლები არ ემთხვევა!');
        return;
      
    }

    window.location.href = 'index.html'; // Proceed to next page
});












    