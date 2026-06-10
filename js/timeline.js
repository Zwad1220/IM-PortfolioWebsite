// Find all timeline cards
const timelineItems =
document.querySelectorAll(".timeline-item");

// Reveal the cards outwards as the user scrolls
const timelineObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.remove("hidden");

        }

    });

},{
    threshold:0.2 //Reveal time
});

timelineItems.forEach(item=>{
    timelineObserver.observe(item);
});