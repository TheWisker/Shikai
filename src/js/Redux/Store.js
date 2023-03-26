import {legacy_createStore as createStore} from "redux";
import * as Operations from "../Greeter/Operations";
import Reducer from "./Reducer";

const default_state = {
    runtime: {
        user: Operations.getInitialUser(),
        session: Operations.getInitialSession(),
        hostname: Operations.getHostname(),
        logos: (window.__is_debug) ? Operations.getLogos(Operations.getLogosDir()) : ""
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
            commands: {
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
                icons: {
                    background: "black",
                    foreground: "rgb(107, 187, 225)"
                }
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
                    color: "black"
                },
                session: {
                    color: "white",
                    background: "black",
                    radius: "16px"
                },
                password: {
                    border: {
                        top: "2px solid rgba(0, 0, 0, 0.3)",
                        left: "none",
                        radius: "16px"
                    },
                    color: "white",
                    background: "rgba(0, 0, 0, 0.2)"
                }
            }
        }
    },
    themes: []
};

export default () => {console.log("Store Created"); return createStore(Reducer, default_state);}