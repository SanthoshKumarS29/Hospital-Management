// Patient Reducer Function

export const PFormReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                ...state,
                patDatas: action.payload, loading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                error: action.payload, loading: false
            }
        case 'ADD_PATIENT':
            return{
                ...state,
                patDatas: [...state.patDatas, action.payload]
            }
        case 'UPDATE_PATIENT':
            return{
                ...state,
                patDatas: state.patDatas.map((patList)=> patList.id === action.payload.id ? action.payload : patList)
            }
        case 'DELETE_PATIENT':
            return{
                ...state,
                patDatas: state.patDatas.filter((patList) => patList.id !== action.payload)
            }
        default:
            return state;
    }
}