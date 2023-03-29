import { legacy_createStore as createStore } from "redux";
import * as Operations from "../Greeter/Operations";
import Reducer from "./Reducer";

const default_state = {
    runtime: {
        user: Operations.getInitialUser(),
        session: Operations.getInitialSession(),
        hostname: Operations.getHostname(),
        logos: (window.__is_debug) ? Operations.getLogos(Operations.getLogosDir()) : "",
        events: {
            loginSuccess: false,
            loginFailure: false,
            inactivity: false
        }
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
                textcolor: "rgba(255,255,255,1)",
                icons: {
                    background: "rgba(0,255,255,0.4)",
                    foreground: "rgba(246,243,248,1)"
                }
            },
            sidebar: {
                background: "rgba(0,0,0,0.75)",
                logo: "assets/media/logos/archlinux.png"
            },
            userbar: {
                background: {
                    top: "rgba(101,0,255,0.75)",
                    bottom: "rgba(0,255,223,0.75)"
                },
                avatar: {
                    color: "rgba(0,0,0,1)"
                },
                session: {
                    color: "rgba(0,255,245,1)",
                    background: "rgba(0,0,0,0.75)",
                    radius: "18px"
                },
                password: {
                    border: {
                        top: "5px solid rgba(0, 0, 0, 0.3)",
                        left: "5px solid rgba(0, 0, 0, 0.3)",
                        radius: "18px"
                    },
                    color: "rgba(0,255,245,1)",
                    background: "rgba(0,0,0,0.4)"
                }
            }
        }
    },
    themes: [
        {
            "name": "Neon",
            "settings": {
                "behaviour": {
                    "user": true,
                    "logo": true,
                    "avatar": true,
                    "evoker": true,
                    "session": true,
                    "hostname": true,
                    "clock": {
                        "enabled": true,
                        "format": "%H:%K:%S"
                    },
                    "date": {
                        "enabled": true,
                        "format": "%B %D, %Y"
                    },
                    "commands": {
                        "shutdown": true,
                        "hibernate": true,
                        "reboot": true,
                        "sleep": true
                    }
                },
                "style": {
                    "main": {
                        "textcolor": "rgba(255,255,255,1)",
                        "icons": {
                            "background": "rgba(0,255,255,0.4)",
                            "foreground": "rgba(246,243,248,1)"
                        }
                    },
                    "sidebar": {
                        "background": "rgba(0,0,0,0.75)",
                        "logo": "assets/media/logos/archlinux.png"
                    },
                    "userbar": {
                        "background": {
                            "top": "rgba(101,0,255,0.75)",
                            "bottom": "rgba(0,255,223,0.75)"
                        },
                        "avatar": {
                            "color": "rgba(0,0,0,1)"
                        },
                        "session": {
                            "color": "rgba(0,255,245,1)",
                            "background": "rgba(0,0,0,0.75)",
                            "radius": "18px"
                        },
                        "password": {
                            "border": {
                                "top": "5px solid rgba(0, 0, 0, 0.3)",
                                "left": "5px solid rgba(0, 0, 0, 0.3)",
                                "radius": "18px"
                            },
                            "color": "rgba(0,255,245,1)",
                            "background": "rgba(0,0,0,0.4)"
                        }
                    }
                }
            }
        },
        {
            "name": "Sunset",
            "settings": {
                "behaviour": {
                    "user": true,
                    "logo": true,
                    "avatar": true,
                    "evoker": true,
                    "session": true,
                    "hostname": true,
                    "clock": {
                        "enabled": true,
                        "format": "%H:%K:%S"
                    },
                    "date": {
                        "enabled": true,
                        "format": "%B %D, %Y"
                    },
                    "commands": {
                        "shutdown": true,
                        "hibernate": true,
                        "reboot": true,
                        "sleep": true
                    }
                },
                "style": {
                    "main": {
                        "textcolor": "rgba(255,255,255,0.8)",
                        "icons": {
                            "background": "rgba(255,0,0,0.4)",
                            "foreground": "rgba(246,243,248,1)"
                        }
                    },
                    "sidebar": {
                        "background": "rgba(0,0,0,0.75)",
                        "logo": "assets/media/logos/archlinux.png"
                    },
                    "userbar": {
                        "background": {
                            "top": "rgba(0,58,255,0.75)",
                            "bottom": "rgba(255,0,0,0.75)"
                        },
                        "avatar": {
                            "color": "rgba(0,0,0,1)"
                        },
                        "session": {
                            "color": "rgba(255,0,0,1)",
                            "background": "rgba(0,0,0,0.75)",
                            "radius": "18px"
                        },
                        "password": {
                            "border": {
                                "top": "5px solid rgba(0, 0, 0, 0.3)",
                                "left": "5px solid rgba(0, 0, 0, 0.3)",
                                "radius": "18px"
                            },
                            "color": "rgba(255,0,0,1)",
                            "background": "rgba(0,0,0,0.4)"
                        }
                    }
                }
            }
        },
        {
            "name": "Glass",
            "settings": {
                "behaviour": {
                    "user": true,
                    "logo": true,
                    "avatar": true,
                    "evoker": true,
                    "session": true,
                    "hostname": true,
                    "clock": {
                        "enabled": true,
                        "format": "%H:%K:%S"
                    },
                    "date": {
                        "enabled": true,
                        "format": "%B %D, %Y"
                    },
                    "commands": {
                        "shutdown": true,
                        "hibernate": true,
                        "reboot": true,
                        "sleep": true
                    }
                },
                "style": {
                    "main": {
                        "textcolor": "rgba(255,255,255,0.8)",
                        "icons": {
                            "background": "rgba(255,255,255,0.4)",
                            "foreground": "rgba(255,255,255,1)"
                        }
                    },
                    "sidebar": {
                        "background": "rgba(137,137,137,0.4)",
                        "logo": "assets/media/logos/archlinux.png"
                    },
                    "userbar": {
                        "background": {
                            "top": "rgba(137,137,137,0.4)",
                            "bottom": "rgba(137,137,137,0.4)"
                        },
                        "avatar": {
                            "color": "rgba(255,255,255,1)"
                        },
                        "session": {
                            "color": "rgba(255,255,255,1)",
                            "background": "rgba(255,255,255,0.49)",
                            "radius": "18px"
                        },
                        "password": {
                            "border": {
                                "top": "none",
                                "left": "none",
                                "radius": "18px"
                            },
                            "color": "rgba(255,255,255,1)",
                            "background": "rgba(255,255,255,0.4)"
                        }
                    }
                }
            }
        },
        {
            "name": "Drowning",
            "settings": {
                "behaviour": {
                    "user": true,
                    "logo": true,
                    "avatar": true,
                    "evoker": true,
                    "session": true,
                    "hostname": true,
                    "clock": {
                        "enabled": true,
                        "format": "%H:%K:%S"
                    },
                    "date": {
                        "enabled": true,
                        "format": "%B %D, %Y"
                    },
                    "commands": {
                        "shutdown": true,
                        "hibernate": true,
                        "reboot": true,
                        "sleep": true
                    }
                },
                "style": {
                    "main": {
                        "textcolor": "rgba(255,255,255,0.7)",
                        "icons": {
                            "background": "rgba(0,255,255,0.4)",
                            "foreground": "rgba(0,0,0,1)"
                        }
                    },
                    "sidebar": {
                        "background": "rgba(0,0,0,0.75)",
                        "logo": "assets/media/logos/archlinux.png"
                    },
                    "userbar": {
                        "background": {
                            "top": "rgba(0,0,0,1)",
                            "bottom": "rgba(0,255,219,0.75)"
                        },
                        "avatar": {
                            "color": "rgba(255,255,255,0.7)"
                        },
                        "session": {
                            "color": "rgba(0,255,245,1)",
                            "background": "rgba(0,0,0,0.9)",
                            "radius": "18px"
                        },
                        "password": {
                            "border": {
                                "top": "5px solid rgba(0, 0, 0, 0.5)",
                                "left": "2px solid rgba(0, 0, 0, 0.5)",
                                "radius": "18px"
                            },
                            "color": "rgba(0,255,245,1)",
                            "background": "rgba(0,237,255,0.4)"
                        }
                    }
                }
            }
        },
        {
            "name": "BlueDeath",
            "settings": {
                "behaviour": {
                    "user": true,
                    "logo": true,
                    "avatar": true,
                    "evoker": true,
                    "session": true,
                    "hostname": true,
                    "clock": {
                        "enabled": true,
                        "format": "%H:%K:%S"
                    },
                    "date": {
                        "enabled": true,
                        "format": "%B %D, %Y"
                    },
                    "commands": {
                        "shutdown": true,
                        "hibernate": true,
                        "reboot": true,
                        "sleep": true
                    }
                },
                "style": {
                    "main": {
                        "textcolor": "rgba(174,239,255,0.9)",
                        "icons": {
                            "background": "rgba(0,98,149,0.55)",
                            "foreground": "rgba(174,239,255,0.9)"
                        }
                    },
                    "sidebar": {
                        "background": "rgba(0,0,0,0.8)",
                        "logo": "assets/media/logos/archlinux.png"
                    },
                    "userbar": {
                        "background": {
                            "top": "rgba(0,26,124,1)",
                            "bottom": "rgba(0,236,255,0.83)"
                        },
                        "avatar": {
                            "color": "rgba(0,10,162,0.5)"
                        },
                        "session": {
                            "color": "rgba(255,255,255,1)",
                            "background": "rgba(109,0,255,0.3)",
                            "radius": "18px"
                        },
                        "password": {
                            "border": {
                                "top": "5px solid rgba(0, 0, 0, 0.5)",
                                "left": "5px solid rgba(0, 0, 0, 0.5)",
                                "radius": "18px"
                            },
                            "color": "rgba(81,0,248,1)",
                            "background": "rgba(145,0,255,0.2)"
                        }
                    }
                }
            }
        }
    ]
};

export default () => { return createStore(Reducer, default_state); }