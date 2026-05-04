import 'normalize.css';
import './style/style.css';
import { toggleAsideBar } from './js/aside';
import { activeButtonNav } from './js/nav';
import { initDate } from './js/period';
import { panelControl } from './js/panelControl';
import {
    updateButtonState,
    validateEmployeeFormFromChange,
    validateEmployeeFormFromSubmit,
    validateProjectsFormFromChange,
    validateProjectsFormFromSubmit,
} from './js/validateForm';
import { getDateKey, getLocalStorage } from './js/localStorage';
import { renderTableEmployees, renderTableProjects } from './js/renderTableProjects';

const form = document.querySelector('.add-project-form');
const formEmploee = document.querySelector('.add-employee-form');
const data = getLocalStorage();
const dateNow = getDateKey();

renderTableProjects(data[dateNow]?.projects);
renderTableEmployees(data[dateNow]?.employees);

function init() {
    toggleAsideBar();
    activeButtonNav();
    initDate();
    panelControl();
    validateProjectsFormFromChange(form);
    validateProjectsFormFromSubmit(form);

    updateButtonState(form);
    validateEmployeeFormFromChange(formEmploee);
    validateEmployeeFormFromSubmit(formEmploee);

    updateButtonState(formEmploee);
}

init();
