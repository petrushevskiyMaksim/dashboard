import { renderTableEmployees, renderTableProjects } from './renderTableProjects';

const selectedMonth = document.querySelector('.month-select');
const selectedYear = document.querySelector('.year-select');

export const LOCAL_STORAGE_KEY = 'monthlyDate';

export const saveProjectToLocalStorage = (data) => {
    if (!data) return;

    const project = {
        id: new Date().getTime(),
        projectName: data['project-name'],
        companyName: data['company-name'],
        budget: data.budget,
        employeeCapacity: data['employee-capacity'],
        employees: [],
    };

    const dateKey = getSelectedDate();

    const storageData = getLocalStorage();
    if (
        storageData[dateKey]?.projects &&
        storageData[dateKey]?.projects.length > 0 &&
        Array.isArray(storageData[dateKey]?.projects)
    ) {
        storageData[dateKey].projects.push(project);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
        renderTableProjects(storageData[dateKey].projects);

        return;
    }

    storageData[dateKey] = {
        employees: [...(storageData[dateKey]?.employees || [])],
        projects: [...(storageData[dateKey]?.projects || [])],
    };

    storageData[dateKey].projects.push(project);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
    renderTableProjects(storageData[dateKey].projects);
};

export const saveEmployeeToLocalStorage = (data) => {
    if (!data) return;

    const employee = {
        id: new Date().getTime(),
        name: data['employee-name'],
        surname: data['employee-surname'],
        dob: data.dob,
        salary: data.salary,
        position: data.position,
        assignments: [],
    };

    const dateKey = getSelectedDate();

    const storageData = getLocalStorage();

    if (
        storageData[dateKey]?.employees &&
        storageData[dateKey]?.employees.length > 0 &&
        Array.isArray(storageData[dateKey]?.employees)
    ) {
        storageData[dateKey].employees.push(employee);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
        renderTableEmployees(storageData[dateKey].employees);

        return;
    }

    storageData[dateKey] = {
        employees: [...(storageData[dateKey]?.employees || [])],
        projects: [...(storageData[dateKey]?.projects || [])],
    };

    storageData[dateKey].employees.push(employee);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
    renderTableEmployees(storageData[dateKey].employees);
};

export function getLocalStorage() {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    const storageData = storage ? JSON.parse(storage) : {};
    return storageData;
}

export function currentDate() {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const dateKey = `${year}-${month}`;

    selectedMonth.value = month;
    selectedYear.value = year;

    return dateKey;
}

export function getSelectedDate() {
    const year = selectedYear.value;
    const month = selectedMonth.value;

    return `${year}-${month}`;
}
