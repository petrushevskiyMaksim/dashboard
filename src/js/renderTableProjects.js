const tableBody = document.querySelector('.projects__table tbody');

export const renderTableProjects = (projects) => {
    tableBody.innerHTML = '';

    if (!projects) {
        const div = document.createElement('div');
        div.style.padding = '20px';
        div.style.fontWeight = '500';
        div.style.fontSize = '20px';
        div.style.width = '100%';
        div.textContent = 'Проектов нету';

        return tableBody.insertAdjacentElement('afterbegin', div);
    }

    projects.forEach((project) => {
        tableBody.innerHTML += createTableRowProject(project);
    });

    return tableBody;
};

const createTableRowProject = (project) => {
    return `<tr>
                            <td>${project.companyName}</td>
                            <td>${project.projectName}</td>
                            <td>${project.budget}</td>
                            <td>
                                <span>0.0/${project.employeeCapacity}</span>
                            </td>
                            <td>-</td>
                            <td class="positive-income">$0.00</td>
                            <td>
                                <button
                                    class="delete-btn delete-project"
                                    data-project-id=${project.id}>
                                    Delete
                                </button>
                            </td>
                        </tr>`;
};
