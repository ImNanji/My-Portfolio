const projectList = [{
    id: 1,
    number: "01",
    title: "MidTown Restaurant",
    description: "MidTown Restaurant is a modern web-based restaurant management and showcase platform.",
    techStack: ["HTML", "CSS", "JavaScript","MySql", "Ajax", "React", "Bootstrap"],
    image: "assets/projects/Project1.png",
    liveLink: "#",
    githubLink: "#",
},
{
    id: 2,
    number: "02",
    title: "Sajilo Karobar (Real-State)",
    description: "Sajilo Karobar is a real estate listing platform designed to help users explore property information easily. ",
    techStack: ["HTML", "CSS", "JavaScript","MySQL", "Ajax", "React"],
    image: "assets/projects/Project2.png",
    liveLink: "#",
    githubLink: "#",
}, {
    id: 3,
    number: "03",
    title: "UP Tech (Gadgets Store)",
    description: "UP Tech is a modern gadgets store website designed to showcase electronic products such as Customize Pc's, Computer accessories, and Laptops. ",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "assets/projects/project3.png",
    liveLink: "#",
    githubLink: "#",
}
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {

    const projectContent = projectList[index];

    const previousDisable = currentIndex === 0;
    const nextDisable = currentIndex === projectList.length - 1;

    projects.innerHTML = `
    <div class="project-info">
        <h3>${projectContent?.number}</h3>
        <h4>${projectContent?.title}</h4>
        <p>${projectContent?.description}</p>

        <div class="tech-stack">
            ${projectContent?.techStack
            ?.map((tech, i) => {
                return `<span>${tech}</span>`;
            })
            .join(",")}
        </div>

        <hr>

        <div class="links">
            <a href="${projectContent?.liveLink}">
                <i class="ph ph-arrow-right"></i>
            </a>
            <a href="${projectContent?.githubLink}">
                <i class="ph ph-github-logo"></i>
            </a>
        </div>
    </div>

    <div class="carousel">
        <img src="${projectContent?.image}" alt="${projectContent?.title}">
        <div class="arrows">
            <a href="#" id="previous" 
               class="${previousDisable ? "disabled-btn" : ""}">
               <i class="ph ph-caret-left"></i>
            </a>

            <a href="#" id="next"
               class="${nextDisable ? "disabled-btn" : ""}">
               <i class="ph ph-caret-right"></i>
            </a>
        </div>
    </div>
    `;

    document.getElementById('previous').addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById('next').addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);
