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

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const isValid = /\@.+\..{2,}/.test(email);
    const isValidAfterAt = email.indexOf('@') !== -1 && email.substring(email.indexOf('@') + 1).length > 2;

    if (!isValid || !isValidAfterAt) {
        alert('გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა!');
    } else {
        alert('რეგისტრაცია წარმატებით დასრულდა');
    }
});





    