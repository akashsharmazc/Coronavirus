export default (state,action) => {
    switch(action.type)
    {
        case 'STATE_DATA':
        return {
            ...state,
            Transactions:action.payload[0],
            State:action.payload[1]
        }
        case 'ERROR':
            return{

                ...state,
                error:action.payload
            }
            case 'BUTTON-CLICKED':
                return{
                    ...state,
                    buttonclicked:true,
                    State:action.payload
                }
        default:
            return state
    }
}
