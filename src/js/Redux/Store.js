import {legacy_createStore as createStore} from "redux";
import * as Operations from "../Greeter/Operations";
import Reducer from "./Reducer";
//Import initial state // store = createStore(PrimaryReducer, initialState);

const def_state = {
    runtime: {
        user: Operations.getInitialUser(),
        session: Operations.getInitialSession(),
        hostname: Operations.getHostname(),
        wallpapers: Operations.getWallpapers(Operations.getWallpaperDir()),
        logos: Operations.getLogos()
    },
    settings: {
        behaviour: {
            user: true,
            logo: true,
            avatar: true,
            evoker: true,
            session: true,
            hostname: true,
            clock: {
                enabled: true,
                format: "%H:%K:%S"
            },
            date: {
                enabled: true,
                format: "%B %D, %Y"
            },
            commands: {//Left to
                shutdown: true,
                hibernate: true,
                reboot: true,
                sleep: true
            }
        },
        style: {
            main: {
                textcolor: "white",
                background: "wallpaper.jpg",
                radius: ""
            },
            sidebar: {
                background: "rgb(20, 44, 57)",
                logo: "assets/media/logos/archlinux.png"
            },
            userbar: {
                background: {
                    top: "rgb(240, 197, 147)",
                    bottom: "rgb(122, 215, 240)"
                },
                avatar: {
                    color: "black",
                    source: "assets/media/profile.jpg"
                },
                session: {
                    color: "white",
                    background: "black",
                    radius: "",
                    click: ""
                },

                password: {
                    border: {
                        top: "2px solid rgba(0, 0, 0, 0.3)",
                        left: "none",
                        radius: "16px"
                    },
                    color: "white",
                    background: "rgba(0, 0, 0, 0.2)"
                },

            }
        }
    },
    themes: [//Left to
        {
            name: "Default",
            settings: {}
        }
    ]
};

function default_state() {

    return "def_state";
}

export default () => {
    console.log("Store Created");
    return createStore(Reducer, def_state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}