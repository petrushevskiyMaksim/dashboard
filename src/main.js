import 'normalize.css';
import './style/style.css';

const asideBar = document.querySelector('.aside');
const openAsideButton = document.querySelector('.open-aside-btn');

function toggleAside() {
    asideBar.classList.toggle('hidden');
    openAsideButton.classList.toggle('hidden');
}

document.body.addEventListener('click', (e) => {
    if (e.target.closest('.aside__button') || e.target.closest('.open-aside-btn')) {
        toggleAside();
    }
});

localStorage.setItem('monthlyData', JSON.stringify({}));

const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth();

// console.log( `${year}-${month}`);
