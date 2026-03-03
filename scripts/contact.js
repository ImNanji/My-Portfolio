const media = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone",
        value: "+977 9814182296",
        href: "tel:+9779814182296",
    },
    {
        id: 2,
        icon: "ph ph-envelope",
        name: "E-Mail",
        value: "Prashantbicte@gmail.com",
        href: "mailto:Prashantbicte@gmail.com",
    },
    {
        id: 3,
        icon: "ph ph-map-pin-area",
        name: "Country",
        value: "Nepal",
        href: "#",
    },
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media">
            <span>
                <i class="${ele?.icon}"></i>
            </span>
            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href="${ele?.href}">${ele?.value}</a>
            </div>
        </div>
    `;
}).join("");

if (media) media.innerHTML = contactContent;


// Send Contact Message:

const sentbtn = document.querySelector("#send-msg");

if (sentbtn) {

    const originalText = sentbtn.innerHTML;
    const originalStyle = {
        backgroundColor: sentbtn.style.backgroundColor,
        color: sentbtn.style.color,
        border: sentbtn.style.border,
        boxShadow: sentbtn.style.boxShadow,
    };

    document.getElementById('contact-form')
    .addEventListener('submit', (event) => {

        event.preventDefault();

        sentbtn.innerHTML = "Sending...";
        sentbtn.style.backgroundColor = "gray";
        sentbtn.style.color = "white";
        sentbtn.style.border = "none";
        sentbtn.style.boxShadow = "none";
        sentbtn.disabled = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (!name || !email || !phone || !message) {

            sentbtn.innerHTML = originalText;
            Object.assign(sentbtn.style, originalStyle);
            sentbtn.disabled = false;

            return Toastify({
                text: "All Fields are Mandatory!",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true,
                style: {
                    background: "rgb(206,16,16)",
                },
            }).showToast();
        }

        // EmailJS
        emailjs.send("service_fxotw9g", "template_i5ayy2l", {
            name,
            email,
            phone,
            message,
        })
        .then(() => {

            Toastify({
                text: "Message Sent!",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true,
                style: {
                    background: "rgb(29,222,38)",
                },
            }).showToast();

            setTimeout(() => {
                sentbtn.innerHTML = originalText;
                Object.assign(sentbtn.style, originalStyle);
                sentbtn.disabled = false;

                document.getElementById('contact-form').reset();

            }, 2000);

        })
        .catch((error) => {

            Toastify({
                text: "Message Failed!",
                duration: 3000,
                gravity: "top",
                position: "center",
                close: true,
                stopOnFocus: true,
                style: {
                    background: "rgb(206,16,16)",
                },
            }).showToast();

            setTimeout(() => {
                sentbtn.innerHTML = originalText;
                Object.assign(sentbtn.style, originalStyle);
                sentbtn.disabled = false;
            }, 2000);

            console.log('FAILED...', error);
        });
    });
}