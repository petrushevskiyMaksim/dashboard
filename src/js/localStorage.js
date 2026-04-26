import { renderTableProjects } from './renderTableProjects';

const LOCAL_STORAGE_KEY = 'monthlyDate';

export const saveProjectToLocalStorage = (data) => {
    if (!data) return;
    const dateKey = getDateKey();

    const project = {
        id: new Date().getTime(),
        projectName: data['project-name'],
        companyName: data['company-name'],
        budget: data.budget,
        employeeCapacity: data['employee-capacity'],
        employees: [],
    };

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
        employees: [],
        projects: [],
    };

    storageData[dateKey].projects.push(project);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));

    renderTableProjects(storageData[dateKey].projects);
};

export function getLocalStorage() {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    const storageData = storage ? JSON.parse(storage) : {};
    return storageData;
}

function getDateKey() {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const dateKey = `${year}-${month}`;
    return dateKey;
}
