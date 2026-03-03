document.addEventListener('DOMContentLoaded', () => {

    /* ================= MENU TOGGLE SCROLL ================= */
    const toggle = document.getElementById('menu-toggle');

    if (toggle) {
        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });
    }

    /* ================= TYPING EFFECT ================= */
    const words = [
        'Developer',
        'Designer',
        '3D Modeler',
        'Video Editor',
        'Trainer',
    ];

    const typingText = document.getElementById('typing-span');

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    let typingSpeed = 100;
    let erasingSpeed = 100;
    let nextWordDelay = 1000;

    function type() {
        if (!typingText) return;

        const currentWord = words[wordIndex];

        if (!isDeleting) {
            // Typing
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, nextWordDelay);
            } else {
                setTimeout(type, typingSpeed);
            }

        } else {
            // Deleting
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, erasingSpeed);
            }
        }
    }

    if (words.length && typingText) {
        type();
    }

    /* ================= NAVIGATION TABS ================= */
    const navlinks = document.querySelectorAll('.navlink');
    const tabs = document.querySelectorAll('.content');

    navlinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Active nav link
            navlinks.forEach((l) => l.classList.remove('active'));
            link.classList.add('active');

            // Active tab content
            const tabName = link.dataset.tab;

            tabs.forEach((t) => {
                if (t.id === tabName) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });

            /* ================= SERVICES SECTION ================= */
            if (tabName === 'services') {

                const serviceList = [
                    {
                        id: 1,
                        icon: "ph-code",
                        text: "Web Development",
                        para: "I build responsive and modern websites."
                    },
                    {
                        id: 2,
                        icon: "ph-palette",
                        text: "UI/UX Design",
                        para: "I create clean and user-friendly designs."
                    },
                    {
                        id: 3,
                        icon: "ph-server",
                        text: "Backend Development",
                        para: "I develop secure and scalable systems."
                    },
                    {
                        id: 4,
                        icon: "ph-cube",
                        text: "3D Object Modeling",
                        para: "I create detailed and realistic 3D models for products, games, and visual presentations."
                    },
                    {
                        id: 5,
                        icon: "ph-video-camera",
                        text: "Video Editing",
                        para: "I produce professional video edits with smooth transitions, effects, and storytelling."
                    },
                    {
                        id: 6,
                        icon: "ph-megaphone",
                        text: "Digital Marketing",
                        para: "I help grow brands through strategic online marketing and audience targeting."
                    },
                    {
                        id: 7,
                        icon: "ph-pencil-simple",
                        text: "Content Creation",
                        para: "I create engaging digital content tailored for social media and online platforms."
                    },
                    {
                        id: 8,
                        icon: "ph-presentation",
                        text: "2D Cartoon (PowerPoint)",
                        para: "I design creative 2D cartoon animations using Microsoft PowerPoint for storytelling and presentations."
                    }
                ];

                const serviceContainer = document.querySelector('.service-list');

                if (serviceContainer) {
                    serviceContainer.innerHTML = serviceList.map((l) => `
                        <div class="box" data-id="${l.id}">
                            <div class="head-icons">
                                <i class="ph ${l.icon}"></i>
                                <span>
                                    <i class="ph ph-arrow-down-right"></i>
                                </span>
                            </div>

                            <h3>${l.text}</h3>
                            <span class="spacer"></span>
                            <p>${l.para}</p>
                        </div>
                    `).join("");
                }
            }

            // Close mobile menu after click
            if (toggle) toggle.checked = false;
            document.body.classList.remove('no-scroll');
        });
    });

});
// if (tabName === 'services') {
//     const serviceList = [
//         {
//             id: 1,
//             icon: "",
//             text: "Wbwlkjlsejg",
//             para: "",
//         },
//         {
//             id: 2,
//             icon: "",
//             text: "",
//             para: "",
//         },
//         {
//             id: 3,
//             icon: "",
//             text: "",
//             para: "",
//         },
//     ];

//     const services=document.getElementsByClassName('service-list');
//     const innerContent = serviceList.map(()=>{
//         return `
//         <div> Inner Box</div>
//         `;
//     });

//     Array.from(services).foreach((ele)=>{
//         ele.innerHTML = innerContent;
//     });



// }