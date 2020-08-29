export default (state,action) => {
    switch(action.type)
    {
        case 'STATE_DATA':
        return {
            ...state,
            Transactions:Object.values(action.payload.dates)
        }
        case 'ERROR':
            return{

                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
