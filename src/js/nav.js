const navList = document.querySelector('.nav__list');

export const activeButtonNav = () => {
    navList.addEventListener('click', (e) => {
        const li = e.target.closest('.nav__item');

        if (!li || e.target.classList.contains('active')) return;

        const allLi = document.querySelectorAll('.nav__item');

        allLi.forEach((item) => {
            item.classList.remove('active');
        });

        li.classList.add('active');
    });
};
