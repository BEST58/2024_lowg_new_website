document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.querySelector('.learn-more-btn');
    
    learnMoreBtn.addEventListener('click', () => {
        alert('You clicked on Learn More!');
    });
});