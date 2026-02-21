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
