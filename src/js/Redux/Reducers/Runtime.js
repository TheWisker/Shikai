export default function Runtime(state, action) {
    switch (action.type) {
        case "Change_User": //Check user exists
            return {...state, user: action.payload};
        case "Change_Session": //Check user exists
            return {...state, session: action.payload};
        case "Change_Hostname":
            return {...state, hostname: action.payload};
        default:
            return state;
    };
}