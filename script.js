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
});
