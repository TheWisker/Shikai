export default function Runtime(state, action) {
    switch (action.type) {
        case "Switch_User":
            if (window.lightdm.users.indexOf(state.user) == window.lightdm.users.length - 1 || window.lightdm.users.indexOf(state.user) == -1) {
                return {...state, user: window.lightdm.users[0]};
            } return {...state, user: window.lightdm.users[window.lightdm.users.indexOf(state.user) + 1]};
        case "Switch_Session":
            if (window.lightdm.sessions.indexOf(state.session) == window.lightdm.sessions.length - 1 || window.lightdm.sessions.indexOf(state.session) == -1) {
                return {...state, session: window.lightdm.sessions[0]};
            } return {...state, session: window.lightdm.sessions[window.lightdm.sessions.indexOf(state.session) + 1]};
        default:
            return state;
    };
}