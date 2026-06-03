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
import { currentDate, getLocalStorage } from './js/localStorage';
import { renderTableEmployees, renderTableProjects } from './js/renderTableProjects';
import { filteredTableProjects } from './js/actionsTable';

const form = document.querySelector('.add-project-form');
const formEmploee = document.querySelector('.add-employee-form');

const data = getLocalStorage();
const dateNow = currentDate();

renderTableProjects(data[dateNow]?.projects);
renderTableEmployees(data[dateNow]?.employees);

function init() {
    toggleAsideBar();

    activeButtonNav();

    currentDate();

    panelControl();

    validateProjectsFormFromChange(form);
    validateProjectsFormFromSubmit(form);
    updateButtonState(form);

    validateEmployeeFormFromChange(formEmploee);
    validateEmployeeFormFromSubmit(formEmploee);

    updateButtonState(formEmploee);

    filteredTableProjects();
}

init();
