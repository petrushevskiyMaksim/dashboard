
const addProjectPanel = document.querySelector('.add-project-panel');
const addProjectButton = document.querySelector('.projects__add-project-btn');
const cancelBtn = document.querySelector('.cancel-project-btn-form');

const openPanel = () => {
    addProjectPanel.classList.add('open');
};

export const closePanel = () => {
    addProjectPanel.classList.remove('open');
};

export const panelControl = () => {
    if (addProjectButton) {
        addProjectButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openPanel();
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closePanel();
        });
    }

    document.addEventListener('click', (e) => {
        if (!addProjectPanel.classList.contains('open')) return;

        if (!addProjectPanel.contains(e.target)) {
            closePanel();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && addProjectPanel.classList.contains('open')) {
            closePanel();
        }
    });
};
