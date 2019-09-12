export const getStateStorage = () => {
    const dateStorage = localStorage.getItem('dates');
    if (dateStorage === null) {
        return undefined
    }
    return JSON.parse(dateStorage);
}

export const saveStateStorage = state => {
    const datesState = JSON.stringify(state);
    localStorage.setItem('dates', datesState);
}
