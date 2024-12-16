// Doc Reducer Functions

export const DFormReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                ...state,
                docDatas: action.payload, loading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                error: action.payload, loading: false
            }
        case 'ADD_DOCTORS':
            return{
                ...state,
                docDatas: [...state.docDatas, action.payload ]
            }
        case 'UPDATE_DOCTORS':
            return{
                ...state,
                docData: state.docDatas.map((docList) => docList.id === action.payload.id ? action.payload : docList)
            }
        case 'DELETE_DOCTORS':
            return{
                ...state,
                docDatas: state.docDatas.filter((docList)=> docList.id !== action.payload)
            }
        default:
            return state;
    }
}