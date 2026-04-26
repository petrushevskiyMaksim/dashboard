import 'normalize.css';
import './style/style.css';
import { toggleAsideBar } from './js/aside';
import { activeButtonNav } from './js/nav';
import { initDate } from './js/period';
import { panelControl } from './js/panelControl';
import { validateFormFromChange, validateFormFromSubmit } from './js/validateForm';
import { getLocalStorage } from './js/localStorage';
import { renderTableProjects } from './js/renderTableProjects';

const form = document.querySelector('.add-project-form');
const data = getLocalStorage();
console.log(data);

renderTableProjects(data['2026-3']?.projects);

function init() {
    toggleAsideBar();
    activeButtonNav();
    initDate();
    panelControl();
    validateFormFromChange(form);
    validateFormFromSubmit(form);
}

init();
