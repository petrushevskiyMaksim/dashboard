import { closePanel } from './panelControl';
import { saveProjectToLocalStorage } from './localStorage';

const addProjectBtn = document.querySelector('.form-add-btn');

function validateField(name, value, field) {
    if (name === 'project-name') {
        if (!value || value.trim().length === 0) {
            return 'Поле не может быть пустым';
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
            return 'Можно вводить только цифры и латинские буквы';
        }

        if (value.trim().length < 3) {
            return 'Минимум 3 символа (сейчас ' + value.trim().length + ')';
        }

        if (value.trim().length === 45) {
            return 'Максимум 45 символов';
        }
    }

    if (name === 'company-name') {
        if (!value || value.trim().length === 0) {
            return 'Поле не может быть пустым';
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
            return 'Можно вводить только цифры и латинские буквы';
        }

        if (value.trim().length < 2) {
            return 'Минимум 2 символа (сейчас ' + value.trim().length + ')';
        }

        if (value.trim().length === 30) {
            return 'Максимум 30 символов';
        }
    }

    if (name === 'budget') {
        field.valueAsNumber;

        if (isNaN(field.valueAsNumber)) {
            return 'Введите коректное число';
        }

        if (field.valueAsNumber === 0) {
            return 'Budget не может быть 0';
        }

        if (field.valueAsNumber < 0) {
            return 'Budget не может быть отрицательным числом';
        }

        if (field.valueAsNumber > 0 && field.valueAsNumber < 1000) {
            return 'Budget должен быть больше 1 000';
        }
        if (field.valueAsNumber > 1000000) {
            return 'Budget не может быть больше 1 000 000';
        }
    }

    if (name === 'employee-capacity') {
        field.valueAsNumber;

        if (isNaN(field.valueAsNumber)) {
            return 'Введите коректное число';
        }

        if (field.valueAsNumber === 0) {
            return 'Employee capacity не может быть 0';
        }

        if (field.valueAsNumber < 0) {
            return 'Employee capacity не может быть отрицательным числом';
        }

        if (field.valueAsNumber > 100) {
            return 'Budget не может быть больше 100';
        }
    }
}

function showError(field, errorMessage) {
    const errorContainer = document.querySelector(`.project-error-${field}`);
    const input = document.querySelector(`.${field}`);

    if (errorMessage) {
        errorContainer.textContent = errorMessage;
        input.style.borderColor = 'red';
        input.style.borderWidth = '1px';
        errorContainer.style.opacity = '1';
    } else {
        errorContainer.textContent = '';
        input.style.borderColor = '';
        errorContainer.style.opacity = '0';
    }
}

export const validateFormFromChange = (form) => {
    form.addEventListener('input', (e) => {
        const field = e.target;
        const fieldName = field.name;
        const fieldValue = field.value;

        const error = validateField(fieldName, fieldValue, field);
        showError(fieldName, error);

        updateButtonState(form);
    });
};

export const validateFormFromSubmit = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!isFormValid(form)) {
            updateButtonState(form);
            return;
        }

        const formData = new FormData(form);
        saveProjectToLocalStorage(Object.fromEntries(formData));
        form.reset();
        updateButtonState(form);
        closePanel();
    });
};

function isFormValid(form) {
    const formData = new FormData(form);
    let isValid = true;

    for (const [name, value] of formData.entries()) {
        const field = document.querySelector(`.${name}`);

        const error = validateField(name, value, field);

        if (error) {
            isValid = false;
            break;
        }
    }

    return isValid;
}

export function updateButtonState(form) {
    const isValid = isFormValid(form);
    addProjectBtn.disabled = !isValid;
}
