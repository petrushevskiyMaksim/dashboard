const projectsTableBody = document.querySelector('.projects__table tbody');
const employeesTableBody = document.querySelector('.employees__table tbody');

export const renderTableProjects = (projects) => {
    projectsTableBody.innerHTML = '';

    if (!projects || projects.length === 0) {
        showEmptyMessage(projectsTableBody, 'Проектов нету', 7);
        return;
    }

    projects.forEach((project) => {
        projectsTableBody.innerHTML += createTableRowProject(project);
    });
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

export const renderTableEmployees = (employees) => {
    employeesTableBody.innerHTML = '';

    if (!employees || employees.length === 0) {
        showEmptyMessage(employeesTableBody, 'Сотрудников нету', 8);
        return;
    }

    employees.forEach((employee) => {
        employeesTableBody.innerHTML += createTableRowEmployee(employee);
    });
};

const createTableRowEmployee = (employee) => {
    return `<tr data-employee-id=${employee.id}>
                            <td>${employee.name}</td>
                            <td>${employee.surname}</td>
                            <td>${calcAgeEmployee(employee)}</td>
                            <td class="editable-position" data-field="position" data-employee-id=${
                                employee.id
                            }>
                                ${employee.position}
                            </td>
                            <td class="editable-salary" data-field="salary" data-employee-id=${
                                employee.id
                            }>${employee.salary}</td>
                            <td >$0.00</td>
                            <td>
                                <button
                                    class="show-details-btn"
                                    data-employee-id=${employee.id}
                                    data-type="assignments"
                                    >
                                    -
                                </button>
                            </td>
                            <td>
                                $100
                            </td>
                            <td>
                                <div class="action-buttons" >
                                <button class="availability-btn" 
                                data-employee-id=${employee.id}
                                title="View availability calendar">
                                Availability
                                </button>
                                <button class="assign-btn"
                                data-employee-id=${employee.id}
                                title="Assign to project">
                                Assign
                                </button>
                                <button class="delete-btn delete-employee"
                                data-employee-id=${employee.id}
                                title="Delete to project">
                                Delete
                                </button>
                                </div>
                            </td>
                        </tr>`;
};

function calcAgeEmployee(employee) {
    const now = new Date();
    const dob = employee.dob;

    const age = now.getFullYear() - new Date(dob).getFullYear();

    return age;
}

// Общая функция для отображения пустого сообщения
function showEmptyMessage(tableBody, message, colSpan) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = colSpan;
    cell.style.padding = '20px';
    cell.style.fontWeight = '500';
    cell.style.fontSize = '20px';
    cell.style.textAlign = 'center';
    cell.textContent = message;
    row.appendChild(cell);
    tableBody.appendChild(row);
}
