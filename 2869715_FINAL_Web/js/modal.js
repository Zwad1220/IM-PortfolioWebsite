const modal = document.getElementById("project-modal");
const title = document.getElementById("modal-title");
const description = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const tech = document.getElementById("modal-tech");
const features = document.getElementById("modal-features");

const closeBtn =
document.querySelector(".close-modal");

const projectData = {

    morabaraba:{

        title:"Morabaraba",
        image: "assets/images/morabaraba-proj.png",

        description:
        "A website-platform deployed to Netlify using Unity WebGL, allowing players to play a digital adaptation of the traditional Morabaraba board game developed as a professional-style university project. The project was presented and documented in a comprehensive report detailing the development process, design decisions, and technical implementation of the game. The project showcased my skills in game development, web deployment, and project documentation.",

        tech:
        "Unity, C#, AI Systems, WebGL, HTML, CSS, JavaScript",

        features:
        "Local multiplayer, three AI difficulties, complete rule enforcement and game state management, Undo / Redo functionality."
    },

    horror:{

        title:"Sci-Fi Thriller Game",
        image: "assets/images/project-x-proj.png",

        description:
        "A 3D action-thriller experience developed in Unity following a narrative where players use telekinetic abilities and weapon upgrades to survive hostile robotic enemies with various boss encounters to escape the lab. The game features a variety of mechanics including telekinesis, boomerang scythe, katana combat, and boss fights, all designed to create an engaging and immersive gameplay experience. Thus allowing me to develop my skills in game design, programming, and AI systems while creating a compelling narrative-driven game.",

        tech:
        "Unity, C#, Game Design, AI Systems",

        features:
        "Telekinesis, boomerang scythe, katana combat, boss fights, upgrades and enemy AI."
    },

    "pixel-cat":{

        title:"Pixel-art Cat Game",
        image: "assets/images/cat-proj.png",

        description:
        "A 2D adventure exploration experience following a witch's slave turned into a cat trying to turn back to normal featuring puzzles, various dialogues, various cutscenes and a pixel-art aesthetic. Different character interactions and environmental storytelling are used to immerse the player in the world and narrative.",

        tech:
        "Unity, C#, Game Design, AI Systems",

        features:
        "Puzzles, cutscenes, dialogues, pixel-art aesthetic, character movement, and environmental storytelling."
    },

    grappling:{

        title:"Grappling Memory Game",
        image: "assets/images/grappling-proj.png",

        description:
        "A prototype game focused on movement systems and cognitive tests through memory sequences used in conjunction with the grappling and shooting mechanics implemented in Unity. The game developed my skills as a designer and programmer in creating engaging mechanics and experiences while also providing a fun and challenging experience for players.",

        tech:
        "Unity, C#, Level Design Based Experiences",

        features:
        "Movement systems, player progression, grappling mechanics, shooting mechanics, player feedback and environmental challenges."
    },

    "crypto-box":{

        title:"The Crypto Box",
        image: "assets/images/crypto-proj.png",

        description:
        "The Crypto box is an advanced security system developed as a university group project in my second year using various engineering disciplines including electronics, mechanics and software development to create a robust and cohesive system. My role in the project involved designing and implementing the electronic components, creating a flex sensor subsystem, and integrating the various subsystems to ensure seamless operation. The project was a comprehensive learning experience that allowed me to apply my knowledge of electronics, and system design to create a functional and innovative security solution.",

        tech:
        "Electronics, Information Technology, Latex, Inkscape",

        features:
        "Responsive design, Cyber security features, Interactive elements with reusable and repurposable electronic components."
    }
};

document
.querySelectorAll(".learn-more")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const project =
        projectData[
            button.dataset.project
        ];

        title.textContent = project.title;
        description.textContent = project.description;
        tech.textContent = project.tech;
        features.textContent = project.features;

        modalImage.src = project.image;
        modalImage.alt = project.title;

        modal.classList.add("show");
    });

});

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("show");

});

modal.addEventListener("click",(event)=>{

    if(event.target === modal){

        modal.classList.remove("show");

    }

});