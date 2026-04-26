import 'normalize.css';
import './style/style.css';
import { toggleAsideBar } from './js/aside';
import { activeButtonNav } from './js/nav';
import { initDate } from './js/period';
import { panelControl } from './js/panelControl';
import { validateFormFromChange, validateFormFromSubmit } from './js/validateForm';

const form = document.querySelector('.add-project-form');

// const initLocalStorageDate = () => {
//     const dateNow = new Date();
//     const year = dateNow.getFullYear();
//     const month = dateNow.getMonth();
//     const dateKey = `${year}-${month}`;
//     const data = {
//         [dateKey]: {},
//     };
//     localStorage.setItem('monthlyDate', JSON.stringify(data));
// };

function init() {
    toggleAsideBar();
    activeButtonNav();
    initDate();
    panelControl();
    validateFormFromChange(form);
    validateFormFromSubmit(form);
    // initLocalStorageDate();
}

init();
