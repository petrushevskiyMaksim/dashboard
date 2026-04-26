const navList = document.querySelector('.nav__list');
const employees = document.querySelector('.employees');
const projects = document.querySelector('.projects');

function showContent(li) {
    if (li.classList.contains('active')) {
        const button = li.firstElementChild;

        if (button.textContent === 'Employees') {
            employees.classList.remove('hidden');
            projects.classList.add('hidden');
        } else if (button.textContent === 'Projects') {
            projects.classList.remove('hidden');
            employees.classList.add('hidden');
        }
    }
}

export const activeButtonNav = () => {
    navList.addEventListener('click', (e) => {
        const li = e.target.closest('.nav__item');

        if (!li || e.target.classList.contains('active')) return;

        const allLi = document.querySelectorAll('.nav__item');

        allLi.forEach((item) => {
            item.classList.remove('active');
        });

        li.classList.add('active');

        showContent(li);
    });
};
