export default {
    names: {
        short: "spa",
        long: "spanish"
    },
    data: {
        demo: {
            hostname: "hostname",
            notifications: {
                info: "¡Notificación de información!",
                success: "¡Notificación de éxito!",
                warning: "¡Notificación de advertencia!",
                error: "¡Notificación de error!"
            },
            hint: "Pista:",
            hints: [
                "¡La contraseña es 'password'!",
                "¡Pasa el cursor sobre la esquina superior izquierda!",
                "¡Haz clic en el fondo para cambiarlo!",
                "¡Cierre el menú de configuración para guardar los cambios!",
                "¡Después de 60 segundos de inactividad, el tema queda en reposo!"
            ]
        },
        commands: {
            names: {
                sleep: "suspender",
                reboot: "reiniciar",
                shutdown: "apagar",
                hibernate: "hibernar"
            },
            messages: {
                sleep: "Tomando una siesta...",
                reboot: "Reiniciando...",
                shutdown: "Apagando...",
                hibernate: "Hibernando...",
                unavailable: "¡Acción no disponible!"
            }
        },
        settings: {
            behaviour: {
                name: "Comportamiento",
                sections: {
                    lang: {
                        name: "Idioma"
                    },
                    general: {
                        name: "General",
                        options: {
                            logo: "Logotipo habilitado",
                            hostname: "Hostname habilitado",
                            avatar: "Avatar habilitado",
                            username: "Nombre de usuario habilitado",
                            session: "Sesión habilitada"
                        }
                    },
                    commands: {
                        name: "Comandos",
                        options: {
                            shutdown: "Apagado habilitado",
                            reboot: "Reinicio habilitado",
                            sleep: "Suspension habilitada",
                            hibernate: "Hibernación habilitada"
                        }
                    },
                    time: {
                        name: "Fecha y Hora",
                        options: {
                            clock: {
                                enabled: "Hora habilitada",
                                format: "Formato de la hora"
                            },
                            date: {
                                enabled: "Fecha habilitada",
                                format: "Formato de la fecha"
                            }
                        }
                    },
                    misc: {
                        name: "Misceláneos",
                        options: {
                            idle: {
                                enabled: "Ocultar en reposo",
                                value: "Tiempo para entrar en reposo (s)"
                            },
                            evoker: "Botón de configuración invisible"
                        }
                    }
                }
            },
            style: {
                name: "Estilo",
                sections: {
                    main: {
                        name: "Principal",
                        options: {
                            avatar: "Color del avatar",
                            text: "Color del texto",
                            sidebar: "Color de la barra lateral",
                            userbar_top: "Color superior de la barra de usuario",
                            userbar_bottom: "Color inferior de la barra de usuario",
                            session_text: "Color del texto de la sesión",
                            session_background: "Color de fondo de la sesión",
                            password_text: "Color del texto de la contraseña",
                            password_background: "Color de fondo de la contraseña",
                            icon_background: "Color de fondo del icono",
                            icon_foreground: "Color de primer plano del icono",                            
                        }
                    },
                    misc: {
                        name: "Misceláneos",
                        options: {
                            vertical: "Bordes superiores e inferiores de la contraseña",
                            horizontal: "Bordes laterales de la contraseña",
                            password: "Radio del borde de la contraseña",
                            session: "Radio del borde de la sesión"
                        }
                    }
                }
            },
            themes: {
                name: "Temas",
                current: {
                    name: "Actual",
                    option: "Nombre"
                },
                saved: "Guardados"
            }
        },
        notifications: {
            logged_in: "Entrando como",
            wrong_password: "¡Contraseña incorrecta!",
            delete_local: "¡Almacenamiento local eliminado!",
            delete_themes: "¡Temas eliminados!",
            theme_activated: "activado!",
            theme_removed: "eliminado!",
            theme_added: "añadido!"
        },
        buttons: {
            switch: "Cambiar",
            confirmation: "¡Esto no se puede deshacer!",
            delete_local: "Eliminar Almacenamiento Local",
            delete_themes: "Eliminar Temas",
            remove: "Eliminar",
            save: "Guardar",
            use: "Usar"
        },
        time: {
            months: {
                long: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"]
            },
            days: {
                long: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
            }
        },
        misc: {
            theme: "Tema"
        }
    }
}