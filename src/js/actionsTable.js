import { removeById } from '../utils/actions';
import { currentDate, getLocalStorage, LOCAL_STORAGE_KEY } from './localStorage';
import { renderTableProjects } from './renderTableProjects';

const tableProjects = document.querySelector('.projects__table');
const TAG_NAME = 'BUTTON';

export const filteredTableProjects = () => {
    tableProjects.addEventListener('click', (e) => {
        const targetId = Number(e.target.dataset.projectId);

        if (!targetId) return;

        const targetButton = e.target.tagName === TAG_NAME;

        if (targetButton && targetId) {
            const allData = getLocalStorage();
            const currentMonthData = allData[currentDate()];

            const filterProjects = removeById(currentMonthData.projects, targetId);

            currentMonthData.projects = filterProjects;

            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allData));

            renderTableProjects(currentMonthData.projects);
        }
    });
};
