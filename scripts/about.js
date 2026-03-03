const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs.length > 0) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all tabs
        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        // Remove active from all content
        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

        // Show Experience Content
        if (activeTab === "experience") {

            const experiences = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: "1",
                    date: "Jan 2020 - Present",
                    position: "Frontend Developer",
                    company: "Own Projects",
                    description: "Developed and maintained web applications using JavaScript, HTML, and CSS."
                },
                {
                    id: "2",
                    date: "Jun 2023 - Dec 2024",
                    position: "3D Object Creator",
                    company: "Own Projects",
                    description: "Created detailed 3D models using Blender and Autodesk Maya."
                }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                    <div class="experience-box" key=${ele?.id}
                        <h4>${ele.date}</h4>
                        <h3>${ele.position}</h3>
                        <div class="company-name">
                            <p>${ele.company}</p>
                        </div>
                        <p>${ele.description}</p>
                    </div>
                `;
            }).join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [{
                id: 1,
                date: "2075 BS",
                degree: "SEE (Secondary Education Examination )",
                institution: "Vyas Divya Secondary Boarding School ",
                details: "Successfully completed Secondary Education Examination with a strong academic foundation in Mathematics, Science, and English. Developed discipline, teamwork skills, and active participation in extracurricular activities."
            }, {
                id: 2,
                date: "2076 - 2078 BS",
                degree: "+2 (Higher Secondary Education)",
                institution: "Parashar College",
                details: "Completed Higher Secondary Education with a strong academic foundation, enhancing analytical thinking and problem-solving skills. Focused on core subjects while actively participating in academic projects and extracurricular activities."
            },
            {
                id: 3,
                date: "2078 BS - Present",
                degree: "Bachelor In Information Communication Technology",
                institution: "Tribhuvan University",
                details: "Currently pursuing a Bachelor’s degree, focusing on developing strong technical knowledge and practical skills. Engaged in academic projects, teamwork, and continuous learning to build a solid professional foundation."
            }];

            const educationContent = educationList.map((ele) => {
                return `
                    <div class="experience-box"key =${ele?.id}
                        <h4>${ele.date}</h4>
                        <h3>${ele.degree}</h3>
                        <div class="company-name">
                            <p>${ele.institution}</p>
                        </div>
                        <p>${ele.description}</p>
                    </div>
                `;
            }).join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (activeTab === "skills") {
            const skills = document.querySelector('.skill-list');

            const skillList = [{
                id: 1,
                name: "HTML-Hyper Text Markup Language",
                icon: "assets/skills/html.png",
            }, {
                id: 2,
                name: "CSS - Cascading Style Sheets",
                icon: "assets/skills/css.png"

            },
            {
                id: 3,
                name: "JavaScript - Programming Language",
                icon: "assets/skills/javascript.png"
            },
            {
                id: 4,
                name: "Python - High-Level Programming Language",
                icon: "assets/skills/python.png"
            },
            {
                id: 5,
                name: "Django - Python Web Framework",
                icon: "assets/skills/djgo.png"
            }, {
                id: 6,
                name: "Java Swing - GUI Development Framework",
                icon: "assets/skills/javaswing.png"
            },
            {
                id: 7,
                name: "Blender - 3D Modeling & Animation Software",
                icon: "assets/skills/blender.png"
            },
            {
                id: 8,
                name: "Adobe Photoshop - Graphic Design & Photo Editing",
                icon: "assets/skills/adobeps.png"
            },
            {
                id: 9,
                name: "Adobe Premiere Pro - Video Editing Software",
                icon: "assets/skills/adobepr.png"
            },
            {
                id: 10,
                name: "Bootstrap - Responsive UI Framework",
                icon: "assets/skills/bootstrap.png"
            }
            ];

            const skillContent = skillList.map((ele) => {
                return `
                 <div class="skill-box" key ${ele?.id}>
                        <img src=" ${ele?.icon}" 
                        alt=" ${ele?.name}" 
                        title=" ${ele?.name}" 
                        loading="lazy">
                    </div>
                `
            }).join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }

        } else if (activeTab == "about-me") {
            const myInfo = document.querySelector('.my-info');

            const infoList = [{
                id: 1,
                key: "Name :",
                value: "Prashant Rb.Stha",
            },
            {
                id: 2,
                key: "Occupation :",
                value: "IT Student"
            },
            {
                id: 3,
                key: "Country :",
                value: "Nepal",
            },
            {
                id: 4,
                key: "Experience :",
                value: "Teacher(Computer Science) <br> Developer(2years)",

            },
            {
                id: 5,
                key: "Address :",
                value: "Vyas-2, Damauli Tanahun"
            }];

            const infoContent=infoList.map((ele)=>{
                return`
                <div class="info-box" key${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                </div>
                `;
            }).join("");

            if(myInfo){
                myInfo.innerHTML=infoContent;
            }
        }
    });
});