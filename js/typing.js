// Find all headings to have typing effect
const typingHeadings =
document.querySelectorAll(".typing-heading");

// Typing function
const observerTyping =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const heading = entry.target;

        // Check if the typing is already complete
        if(heading.dataset.typed === "true") return;

        heading.dataset.typed = "true";

        const text = heading.dataset.text;

        //Start from the first letter
        let index = 0;

        heading.textContent = "";

        // Type the heading
        function type(){
            // Type each letter of the heading sequencially
            if(index < text.length){

                heading.textContent +=
                text.charAt(index);

                index++;

                setTimeout(type,80);
            } else {
            
            // Styling
            heading.style.borderRight = "none";
            heading.style.animation = "none";
            }
        }

        type();

    });

},{
    // Time taken to type
    threshold:0.5
});

typingHeadings.forEach(heading=>{
    observerTyping.observe(heading);
});