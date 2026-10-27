// Select DOM elements
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved user preference in localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    bodyElement.classList.add('dark-mode');
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
    
    if (bodyElement.classList.contains('dark-mode')) {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');
    }
});