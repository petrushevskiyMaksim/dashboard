const addProjectPanel = document.querySelector('.add-project-panel');
const addProjectButton = document.querySelector('.projects__add-project-btn');
const addEmployeePanel = document.querySelector('.add-employee-panel');
const addEmployeeButton = document.querySelector('.employees__add-project-btn');

const cancelProjectBtn = document.querySelector('.cancel-project-btn-form');
const cancelEmployeeBtn = document.querySelector('.cancel-employee-btn-form');

const openProjectPanel = () => {
    addProjectPanel.classList.add('open');
};

const openEmployeePanel = () => {
    addEmployeePanel.classList.add('open');
};

export const closePanel = () => {
    if (addProjectPanel.classList.contains('open')) {
        addProjectPanel.classList.remove('open');
    }
    if (addEmployeePanel.classList.contains('open')) {
        addEmployeePanel.classList.remove('open');
    }
};

export const panelControl = () => {
    if (addProjectButton) {
        addProjectButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectPanel();
        });
    }

    if (addEmployeeButton) {
        addEmployeeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openEmployeePanel();
        });
    }

    if (cancelProjectBtn) {
        cancelProjectBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closePanel();
        });
    }

    if (cancelEmployeeBtn) {
        cancelEmployeeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closePanel();
        });
    }

    document.addEventListener('click', (e) => {
        if (addProjectPanel.classList.contains('open')) {
            if (!addProjectPanel.contains(e.target)) {
                closePanel();
            }
        }
        if (addEmployeePanel.classList.contains('open')) {
            if (!addEmployeePanel.contains(e.target)) {
                closePanel();
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && addProjectPanel.classList.contains('open')) {
            closePanel();
        }

        if (e.key === 'Escape' && addEmployeePanel.classList.contains('open')) {
            closePanel();
        }
    });
};
