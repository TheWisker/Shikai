/**
 * @license Shikai
 * eng.js
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    names: {
        short: "eng",
        long: "english"
    },
    data: {
        demo: {
            hostname: "hostname",
            notifications: {
                info: "Info notification!",
                success: "Success notification!",
                warning: "Warning notification!",
                error: "Error notification!"
            },
            hint: "Hint:",
            hints: [
                "The password is 'password'!",
                "Hover over the upper-left corner!",
                "Click on the background to change it!",
                "Close the settings menu to save the changes!",
                "After 60 seconds of inactivity the theme goes idle!",
                "Double click the drag-handles to return to the default position!"
            ]
        },
        commands: {
            names: {
                sleep: "sleep",
                reboot: "reboot",
                shutdown: "shutdown",
                hibernate: "hibernate"
            },
            messages: {
                sleep: "Taking a nap...",
                reboot: "Restarting...",
                shutdown: "Shutting down...",
                hibernate: "Hibernating...",
                unavailable: "Action not available!"
            }
        },
        settings: {
            behaviour: {
                name: "Behaviour",
                sections: {
                    lang: {
                        name: "Language"
                    },
                    general: {
                        name: "General",
                        options: {
                            logo: "Logo enabled",
                            hostname: "Hostname enabled",
                            avatar: "Avatar enabled",
                            username: "Username enabled",
                            session: "Session enabled"
                        }
                    },
                    commands: {
                        name: "Commands",
                        options: {
                            shutdown: "Shutdown enabled",
                            reboot: "Reboot enabled",
                            sleep: "Sleep enabled",
                            hibernate: "Hibernate enabled"
                        }
                    },
                    time: {
                        name: "Clock and Date",
                        options: {
                            clock: {
                                enabled: "Clock enabled",
                                format: "Clock format"
                            },
                            date: {
                                enabled: "Date enabled",
                                format: "Date format"
                            }
                        }
                    },
                    misc: {
                        name: "Miscellaneous",
                        options: {
                            idle: {
                                enabled: "Hide on idle",
                                value: "Idle timeout (s)"
                            },
                            evoker: "Settings button invisible"
                        }
                    }
                }
            },
            style: {
                name: "Style",
                sections: {
                    main: {
                        name: "Main",
                        options: {
                            avatar: "Avatar color",
                            text: "Text color",
                            sidebar: "Sidebar color",
                            userbar_top: "Userbar top color",
                            userbar_bottom: "Userbar bottom color",
                            session_text: "Session text color",
                            session_background: "Session background color",
                            password_text: "Password text color",
                            password_background: "Password background color",
                            icon_background: "Icon background color",
                            icon_foreground: "Icon foreground color",                            
                        }
                    },
                    misc: {
                        name: "Miscellaneous",
                        options: {
                            vertical: "Password top bottom borders",
                            horizontal: "Password left right borders",
                            password: "Password border radius",
                            session: "Session border radius"
                        }
                    }
                }
            },
            themes: {
                name: "Themes",
                current: {
                    name: "Current",
                    option: "Name"
                },
                saved: "Saved"
            }
        },
        notifications: {
            logged_in: "Logged in as",
            wrong_password: "Wrong password!",
            delete_local: "LocalStorage deleted!",
            delete_themes: "Themes deleted!",
            theme_activated: "activated!",
            theme_removed: "removed!",
            theme_added: "added!"
        },
        buttons: {
            switch: "Switch",
            confirmation: "This cannot be undone!",
            delete_local: "Delete LocalStorage",
            delete_themes: "Delete Themes",
            remove: "Remove",
            save: "Save",
            use: "Use"
        },
        time: {
            months: {
                long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Noemvber", "December"],
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            days: {
                long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            }
        },
        misc: {
            theme: "Theme"
        }
    }
}