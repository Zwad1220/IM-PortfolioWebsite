// Find all filter buttons
const buttons =
document.querySelectorAll(".filter-btn");

// Find all project cards
const cards =
document.querySelectorAll(".project-card");

// Determine which projects should be displayed
buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        // Switch the correct cards active
        cards.forEach(card=>{

            if(
                filter === "all" ||
                card.dataset.category === filter
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});