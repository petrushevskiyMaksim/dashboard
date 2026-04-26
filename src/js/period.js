const selectedMonth = document.querySelector('.month-select');
const selectedYear = document.querySelector('.year-select');

export const initDate = () => {
    const monthNow = new Date().getMonth();
    const fullYearNow = new Date().getFullYear();

    selectedMonth.value = monthNow;
    selectedYear.value = fullYearNow;
};
