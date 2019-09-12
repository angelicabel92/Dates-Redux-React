const initialState = {
    error: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'VALIDATION_FORM':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
