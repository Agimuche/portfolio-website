// smooth scrolling effect 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e)){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    //Fade-in animation on scroLL
    const sections = document.querySelectorAll("section");

    const observer = new intersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });
    
    section.forEach(section => {
        section.style.opacity = 0;
        observer.observer(section);
    });