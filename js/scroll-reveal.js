// Find all elements to be revealed
const revealElements =
document.querySelectorAll(".reveal-up");

// Set the effect active
const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    // Time taken to reveal
    threshold:0.15
});

revealElements.forEach(element=>{
    revealObserver.observe(element);
});