const initialState = {
    dates: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'ADD_DATE':
            return {
                ...state,
                dates: [...state.dates, action.payload]
            }
        case 'DELETE_DATE':
            return {
                ...state,
                dates: state.dates.filter(date => date.id !== action.payload)
            }
        default:
            return state;
    }
}
