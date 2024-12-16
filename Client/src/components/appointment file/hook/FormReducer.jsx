// Reducer Functions

export const FormReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                datas: action.payload, loading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                error: action.payload, loading: false
            }
        case 'ADD_APPOINTMENT':
            return{
                ...state,
                datas: [ ...state.datas, action.payload]
            }
        case 'UPDATE_APPOINTMENT':
            return{
                ...state,
                datas: state.datas.map((appiontmentList) => appiontmentList.id === action.payload.id ? action.payload : appiontmentList )
            }
        case 'DELETE_APPOINTMENT':
            return{
                ...state,
                datas: state.datas.filter((appiontmentList) => appiontmentList.id !== action.payload)
            }
        default:
            return state;
    }
}