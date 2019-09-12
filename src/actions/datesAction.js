export const AddDatesAction = date => {
    return {
        type: 'ADD_DATE',
        payload: date
    }
}

export const deleteDateAction = id => {
    return {
        type: 'DELETE_DATE',
        payload: id
    }
}
