import { getLocalStorage } from './localStorage';
import { renderTableEmployees, renderTableProjects } from './renderTableProjects';

const selectedMonth = document.querySelector('.month-select');
const selectedYear = document.querySelector('.year-select');

// Функция загрузки данных за выбранный период
const loadDataForPeriod = () => {
    const dateKey = `${selectedYear.value}-${selectedMonth.value}`;
    const allData = getLocalStorage();
    const periodData = allData[dateKey] || { projects: [], employees: [] };

    renderTableProjects(periodData.projects);
    renderTableEmployees(periodData.employees);
};

// Слушатели изменений
selectedMonth.addEventListener('change', loadDataForPeriod);
selectedYear.addEventListener('change', loadDataForPeriod);

export const initDate = () => {
   
};
