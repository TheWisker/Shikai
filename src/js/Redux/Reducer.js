import * as Operations from "../Greeter/Operations";

import Settings from "./Reducers/Settings";

const def_state = {
    user: Operations.getInitialUser(),
    session: Operations.getInitialSession(),
    hostname: Operations.getHostname()
};

export default function Reducer(state = def_state, action) {
    return {
        ...state,
        
        settings: Settings(state.settings, action),
    }
}