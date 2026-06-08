const typingHeadings =
document.querySelectorAll(".typing-heading");

console.log(document.querySelectorAll(".typing-heading"));

const observerTyping =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const heading = entry.target;

        if(heading.dataset.typed === "true") return;

        heading.dataset.typed = "true";

        const text = heading.dataset.text;

        let index = 0;

        heading.textContent = "";

        function type(){

            if(index < text.length){

                heading.textContent +=
                text.charAt(index);

                index++;

                setTimeout(type,80);
            } else {

            heading.style.borderRight = "none";
            heading.style.animation = "none";
            }
        }

        type();

    });

},{
    threshold:0.5
});

typingHeadings.forEach(heading=>{
    observerTyping.observe(heading);
});