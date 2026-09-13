// Load header, hero, footer from /components/
fetch('/components/topbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('topbar-section').innerHTML = data;
    });

    // Load header, hero, footer from /components/
fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-section').innerHTML = data;
    });

fetch('/components/hero.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hero-section').innerHTML = data;
    });

fetch('/components/popular-cats.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('popular-categories').innerHTML = data;
    });

fetch('/components/featured-products.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('featured-products').innerHTML = data;
    });

fetch('/components/benefits.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('benefits-section').innerHTML = data;
    });

fetch('/components/testimonials.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('testimonials-section').innerHTML = data;
    });

fetch('/components/newsletter.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('newsletter-section').innerHTML = data;
    });

fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


// Sidebar toggle on mobile

const openBtn = document.getElementById('open-filters');
const closeBtn = document.getElementById('close-filters');
const sidebar = document.getElementById('filter-sidebar');
const backdrop = document.getElementById('filter-backdrop');

function toggleSidebar() {
    sidebar.classList.toggle('hidden');
    backdrop.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    
    // Tiny timeout to let the hidden class trigger layout before sliding in
    setTimeout(() => {
        sidebar.classList.toggle('-translate-x-full');
    }, 10);
}

openBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
backdrop.addEventListener('click', toggleSidebar);