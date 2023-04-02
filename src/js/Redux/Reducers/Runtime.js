export default function Runtime(state, action) {
    switch (action.type) {
        case "Switch_User":
            if (lightdm.users.indexOf(state.user) == lightdm.users.length - 1 || lightdm.users.indexOf(state.user) == -1) {
                return {...state, user: lightdm.users[0]};
            } return {...state, user: lightdm.users[lightdm.users.indexOf(state.user) + 1]};
        case "Switch_Session":
            if (lightdm.sessions.indexOf(state.session) == lightdm.sessions.length - 1 || lightdm.sessions.indexOf(state.session) == -1) {
                return {...state, session: lightdm.sessions[0]};
            } return {...state, session: lightdm.sessions[lightdm.sessions.indexOf(state.session) + 1]};
        case "Start_Event":
            var events = {...state.events};
            events[action.key] = true;
            return {...state, events: events}
        case "Stop_Event":
            var events = {...state.events};
            events[action.key] = false;
            return {...state, events: events}
        default:
            return state;
    };
}