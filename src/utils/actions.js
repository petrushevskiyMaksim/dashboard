export const removeById = (list, id) => {
    const result = list.filter((item) => item.id !== id);

    return result;
};
