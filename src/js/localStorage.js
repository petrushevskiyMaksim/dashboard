const LOCAL_STORAGE_KEY = 'monthlyDate';

export const saveProjectToLocalStorage = (data) => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const dateKey = `${year}-${month}`;

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    const storageData = storage ? JSON.parse(storage) : {};
    console.log(storageData);
    console.log(data);

    if (!data) return;

    if (
        storageData[dateKey]?.projects &&
        storageData[dateKey]?.projects.length > 0 &&
        Array.isArray(storageData[dateKey]?.projects)
    ) {
        storageData[dateKey].projects.push(data);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
        return;
    }

    storageData[dateKey] = {
        employees: [],
        projects: [],
    };

    storageData[dateKey].projects.push(data);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storageData));
};
