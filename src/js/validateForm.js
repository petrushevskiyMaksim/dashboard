import { closePanel } from './panelControl';
import { saveEmployeeToLocalStorage, saveProjectToLocalStorage } from './localStorage';

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

    if (name === 'employee-name' || name === 'employee-surname') {
        if (!value || value.trim().length === 0) {
            return 'Поле не может быть пустым';
        }

        if (!/^[a-zA-Z\s]+$/.test(value)) {
            return 'Можно вводить только  латинские буквы';
        }

        if (value.trim().length < 3) {
            return 'Минимум 3 символа (сейчас ' + value.trim().length + ')';
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

    if (name === 'salary') {
        field.valueAsNumber;

        if (isNaN(field.valueAsNumber)) {
            return 'Введите коректное число';
        }

        if (field.valueAsNumber === 0) {
            return 'Salary не может быть 0';
        }

        if (field.valueAsNumber < 100) {
            return 'Salary не может быть меньше 100';
        }

        if (field.valueAsNumber > 1000000) {
            return 'Salary не может быть больше 1 000 000';
        }
    }

    if (name === 'dob') {
        const yearNow = new Date().getFullYear();
        const yearDob = new Date(value).getFullYear();

        const age = yearNow - yearDob;

        if (age < 18 || age > 65) {
            return 'Age не может быть меньше 18 и больше 65';
        }
    }

    if (name === 'position') {
        if (!value || value === '' || !value.trim()) {
            return `Выберите position`;
        }
    }
}

function showError(field, errorMessage) {
    const errorContainer = document.querySelector(`.project-error-${field}`);
    const input = document.querySelector(`.${field}`);

    console.log('=== showError DEBUG ===');
    console.log('field:', field);
    console.log('errorMessage:', errorMessage);
    console.log('errorContainer found:', errorContainer);
    console.log('input found:', input);

    if (errorMessage) {
        errorContainer.textContent = errorMessage;
        errorContainer.style.opacity = '1';
        input.style.borderColor = 'red';
        input.style.borderWidth = '1px';
    } else {
        errorContainer.textContent = '';
        errorContainer.style.opacity = '0';
        input.style.borderColor = '';
    }
}

export const validateProjectsFormFromChange = (form) => {
    form.addEventListener('input', (e) => {
        const field = e.target;
        const fieldName = field.name;
        const fieldValue = field.value;

        const error = validateField(fieldName, fieldValue, field);
        showError(fieldName, error);

        updateButtonState(form);
    });
};

export const validateProjectsFormFromSubmit = (form) => {
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

export const validateEmployeeFormFromChange = (form) => {
    form.addEventListener('input', (e) => {
        const field = e.target;
        const fieldName = field.name;
        const fieldValue = field.value;

        const error = validateField(fieldName, fieldValue, field);
        showError(fieldName, error);

        updateButtonState(form);
    });
};

export const validateEmployeeFormFromSubmit = (form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!isFormValid(form)) {
            updateButtonState(form);
            return;
        }

        const formData = new FormData(form);

        saveEmployeeToLocalStorage(Object.fromEntries(formData));
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
