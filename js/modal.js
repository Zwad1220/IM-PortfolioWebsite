// Find all modal cards and their details
const modal = document.getElementById("project-modal");
const title = document.getElementById("modal-title");
const description = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const tech = document.getElementById("modal-tech");
const features = document.getElementById("modal-features");

// Button to close modal
const closeBtn = document.querySelector(".close-modal");

// Data to be displayed in the respective modals
const projectData = {

    // Morabaraba modal
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

    // Sci-Fi game modal
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

    // Pixel art cat game modal
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

    // Reverse 2048 project modal
    2048:{

        title:"Reverse 2048 Project",
        image: "assets/images/2048-proj.png",
        description:
        "A fully functional version of the reverse 2048 game played by two AI algorithms that play against each other until one wins or a draw is concluded. The project was developed in C++ on codeblocks with a focus on clean code, documentation and AI implementation. The project allowed me to develop my skills in C++ programming, AI algorithm implementation, and software engineering practices while creating a functional and engaging gameplay experience.",
        tech:
        "C++, Object-Oriented Programming, AI Algorithms, Clean Code, Documentation",
        features:
        "Complete rule enforcement and game state management, 2 AI Algorithms, intuitive design, and professional software engineering practices."
    },

    // Assembly lock-system modal
    "assembly-lock":{

        title:"Assembly Lock System",
        image: "assets/images/assembly-lock-proj.png",

        description:
        "A secure lock system designed and coded using assembly language, featuring a combination of hardware and software components to ensure robust security. The project involved designing the mechanical aspects of the lock, implementing the electronic components, and programming the lock's functionality using assembly language; including a warning and alarm state for the system when incorrect inputs are detected. The system was designed to be secure against common attack methods and included features such as a secure locking mechanism and hardware integration. The project provided a comprehensive learning experience in assembly programming, hardware design, and security principles.",

        tech:
        "Assembly, Documentation, Electrical Engineering",

        features:
        "Secure locking mechanism, hardware integration, software components, and robust security features."
    },

    // Grappling movement game modal
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

    // Crypto-box security system modal
    "crypto-box":{

        title:"The Crypto Box",
        image: "assets/images/crypto-proj.png",

        description:
        "The Crypto box is an advanced security system developed as a university group project in my second year using various engineering disciplines including electronics, mechanics and software development to create a robust and cohesive system. My role in the project involved designing and implementing the electronic components, creating a flex sensor subsystem, and integrating the various subsystems to ensure seamless operation. The project was a comprehensive learning experience that allowed me to apply my knowledge of electronics, and system design to create a functional and innovative security solution.",

        tech:
        "Electronics, System Integration, Latex, Inkscape",

        features:
        "Responsive design, Cyber security features, Interactive elements with reusable and repurposable electronic components."
    }
};

// Learn more modal expansion button
document.querySelectorAll(".learn-more").forEach(button=>{

    button.addEventListener("click",()=>{

        const project =
        projectData[
            button.dataset.project
        ];
        
        // Display each detail
        title.textContent = project.title;
        description.textContent = project.description;
        tech.textContent = project.tech;
        features.textContent = project.features;

        // Include title and image of the project
        modalImage.src = project.image;
        modalImage.alt = project.title;

        modal.classList.add("show");
    });

});

// Make the modal close
closeBtn.addEventListener("click",()=>{

    modal.classList.remove("show");

});

modal.addEventListener("click",(event)=>{

    if(event.target === modal){

        modal.classList.remove("show");

    }

});