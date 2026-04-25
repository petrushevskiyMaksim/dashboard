const asideBar = document.querySelector('.aside');
const openAsideButton = document.querySelector('.open-aside-btn');

function toggleAside() {
    asideBar.classList.toggle('hidden');
    openAsideButton.classList.toggle('hidden');
}

export const toggleAsideBar = () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.aside__button') || e.target.closest('.open-aside-btn')) {
            toggleAside();
        }
    });
};
