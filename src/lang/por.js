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
        short: "por",
        long: "portuguese"
    },
    data: {
        demo: {
            hostname: "hostname",
            notifications: {
                info: "Notificação de informação!",
                success: "Notificação de sucesso!",
                warning: "Notificação de aviso!",
                error: "Notificação de erro"
            },
            hint: "Dica:",
            hints: [
                "A palavra-passe é 'password'!",
                "Passe o cursor pelo canto superior esquerdo",
                "Clique na imagem de fundo para alterá-la",
                "Feche o menu das definições para guardar as alterações",
                "Após 60 segundos de inatividade, o tema fica inativo",
                "Faça duplo clique nos controlos de arraste para regressar à posição padrão"
            ]
        },
        commands: {
            names: {
                sleep: "suspender",
                reboot: "reiniciar",
                shutdown: "desligar",
                hibernate: "hibernar"
            },
            messages: {
                sleep: "A fazer uma sesta...",
                reboot: "A reiniciar...",
                shutdown: "A encerrar...",
                hibernate: "A hibernar...",
                unavailable: "Acção não disponível!"
            }
        },
        settings: {
            behaviour: {
                name: "Comportamento",
                sections: {
                    lang: {
                        name: "Idioma"
                    },
                    general: {
                        name: "Geral",
                        options: {
                            logo: "Logótipo activado",
                            hostname: "Hostname activado",
                            avatar: "Avatar activado",
                            username: "Nome de utilizador activado",
                            session: "Sessão activada"
                        }
                    },
                    commands: {
                        name: "Comandos",
                        options: {
                            shutdown: "Encerrar activado",
                            reboot: "Reiniciar activado",
                            sleep: "Suspender activado",
                            hibernate: "Hibernar activado"
                        }
                    },
                    time: {
                        name: "Relógio e Data",
                        options: {
                            clock: {
                                enabled: "Relógio activado",
                                format: "Formato do relógio"
                            },
                            date: {
                                enabled: "Data activada",
                                format: "Formato da data"
                            }
                        }
                    },
                    misc: {
                        name: "Miscelânea",
                        options: {
                            idle: {
                                enabled: "Esconder aquando inativo ",
                                value: "Tempo até ficar inativo (s)"
                            },
                            evoker: "Botão das configurações invisível"
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
                            avatar: "Cor do avatar",
                            text: "Cor do texto",
                            sidebar: "Cor da barra lateral",
                            userbar_top: "Cor da barra superior do utilizador",
                            userbar_bottom: "Cor da barra inferior do utilizador",
                            session_text: "Cor do texto da sessão",
                            session_background: "Cor de fundo da sessão",
                            password_text: "Cor do texto da palavra-passe",
                            password_background: "Cor de fundo da palavra-passe",
                            icon_background: "Cor de fundo do ícone",
                            icon_foreground: "Cor de primeiro plano do ícone",                            
                        }
                    },
                    misc: {
                        name: "Miscelânea",
                        options: {
                            vertical: "Contornos superiores e inferiores da palavra-passe",
                            horizontal: "Contornos à esquerda e à direita da palavra-passe",
                            password: "Raio do contorno da palavra-passe",
                            session: "Raio do contorno da sessão",
                            caret: {
                                left: "Símbolo decorativo esquerdo da palavra-passe",
                                right: "Símbolo decorativo direito da palavra-passe"
                            }
                        }
                    }
                }
            },
            themes: {
                name: "Temas",
                current: {
                    name: "Actual",
                    option: "Nome"
                },
                saved: "Guardado"
            }
        },
        notifications: {
            logged_in: "Iniciou sessão como",
            wrong_password: "Palavra-passe errada!",
            delete_local: "Armazenamento local eliminado!",
            delete_themes: "Temas eliminados!",
            theme_activated: "activado!",
            theme_removed: "apagado!",
            theme_added: "adicionado!"
        },
        buttons: {
            switch: "Modificar",
            confirmation: "Isto não pode ser desfeito!",
            delete_local: "Apagar armazenamento local",
            delete_themes: "Apagar Temas",
            remove: "Remover",
            save: "Guardar",
            use: "Utilizar"
        },
        time: {
            months: {
                long: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                short: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
            },
            days: {
                long: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
                short: ["Sun", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
            }
        },
        misc: {
            theme: "Tema"
        }
    }
}
