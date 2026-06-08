const timelineItems =
document.querySelectorAll(".timeline-item");

const timelineObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.remove("hidden");

        }

    });

},{
    threshold:0.2
});

timelineItems.forEach(item=>{
    timelineObserver.observe(item);
});