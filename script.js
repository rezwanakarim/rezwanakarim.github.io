document.addEventListener("DOMContentLoaded", function() {
   
    const filterButtons = document.querySelectorAll('.skill-type .skills-list-type');
    const skills = document.querySelectorAll('.skills-list .skills-list-item');

    
 
    const showAllSkills = () => {
        skills.forEach(skill => {
            skill.style.display = 'inline-block';
        });
    };

    showAllSkills();
    document.getElementById('all').classList.add('active');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = button.id;

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            skills.forEach(skill => {
                const skillTypes = skill.getAttribute('data-type').split(' ');
                if (type === "all" || skillTypes.includes(type)) {
                    skill.style.display = 'inline-block';
                } else {
                    skill.style.display = 'none';
                }
            });
        });
    });

    emailjs.init('G01Jv_ElJZPt8iCon'); 
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
     
        const formData = new FormData(this);
        const data = {
            full_name: formData.get('full_name'),
            email: formData.get('email'),
            phone_number: formData.get('phone_number'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
    
      
        emailjs.send('service_m1wdwwe', 'template_z46tkil', data)
            .then((response) => {
                console.log('Success:', response);
                alert('Email sent successfully!');
                document.getElementById('contact-form').reset(); 
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send email.');
            });
    });
    
});

function copyEmail() {
    const emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let current = '';

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            current = id; 
        }
    });
   
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};









