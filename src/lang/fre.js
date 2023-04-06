export default {
    names: {
        short: "fre",
        long: "french"
    },
    data: {
        demo: {
            hostname: "nom d'hôte",
            notifications: {
                info: "Avis d'infos !",
                success: "Avis de réussite !",
                warning: "Avis d'avertissement !",
                error: "Avis d'erreur !"
            },
            hint: "Indice:",
            hints: [
                "Le mot de passe est 'password' !",
                "Survolez le coin supérieur gauche !",
                "Cliquez sur le fond pour le changer !",
                "Fermez le menu des paramètres pour enregistrer les modifications !",
                "Après 60 secondes d'inactivité, le thème devient inactif !"
            ]
        },
        commands: {
            names: {
                sleep: "suspendre",
                reboot: "redémarrer",
                shutdown: "fermer",
                hibernate: "hiberner"
            },
            messages: {
                sleep: "Faire une sieste...",
                reboot: "Redémarrage...",
                shutdown: "Éteindre...",
                hibernate: "Hiberner...",
                unavailable: "Action non disponible !"
            }
        },
        settings: {
            behaviour: {
                name: "Comportement",
                sections: {
                    lang: {
                        name: "Langue"
                    },
                    general: {
                        name: "Général",
                        options: {
                            logo: "Logo activé",
                            hostname: "Nom d'hôte activé",
                            avatar: "Avatar activé",
                            username: "Nom d'utilisateur activé",
                            session: "Session activée"
                        }
                    },
                    commands: {
                        name: "Commandes",
                        options: {
                            shutdown: "Arrêt activé",
                            reboot: "Redémarrage activé",
                            sleep: "Veille activée",
                            hibernate: "Hibernation activée"
                        }
                    },
                    time: {
                        name: "Horloge et Date",
                        options: {
                            clock: {
                                enabled: "Horloge activée",
                                format: "Format d'horloge"
                            },
                            date: {
                                enabled: "Date activée",
                                format: "Format de date"
                            }
                        }
                    },
                    misc: {
                        name: "Divers",
                        options: {
                            idle: {
                                enabled: "Masquer en cas d'inactivité",
                                value: "Délai d'inactivité (s)"
                            },
                            evoker: "Bouton paramètres invisible"
                        }
                    }
                }
            },
            style: {
                name: "Style",
                sections: {
                    main: {
                        name: "Principal",
                        options: {
                            avatar: "Couleur de l'avatar",
                            text: "Couleur du texte",
                            sidebar: "Couleur de la barre latérale",
                            userbar_top: "Couleur du haut de la barre utilisateur",
                            userbar_bottom: "Couleur du bas de la barre utilisateur",
                            session_text: "Couleur du texte de la session",
                            session_background: "Couleur d'arrière-plan de la session",
                            password_text: "Couleur du texte du mot de passe",
                            password_background: "Couleur de fond du mot de passe",
                            icon_background: "Couleur d'arrière-plan de l'icône",
                            icon_foreground: "Couleur de premier plan de l'icône",                            
                        }
                    },
                    misc: {
                        name: "Divers",
                        options: {
                            vertical: "Bordure supérieure inférieure du mot de passe",
                            horizontal: "Mot de passe bordures gauche droite",
                            password: "Rayon de la bordure du mot de passe",
                            session: "Rayon de la bordure de la session"
                        }
                    }
                }
            },
            themes: {
                name: "Thèmes",
                current: {
                    name: "Actuel",
                    option: "Nom"
                },
                saved: "Enregistré"
            }
        },
        notifications: {
            logged_in: "Connecté en tant que",
            wrong_password: "Mauvais mot de passe !",
            delete_local: "Stockage local supprimé !",
            delete_themes: "Thèmes supprimés !",
            theme_activated: "activé !",
            theme_removed: "supprimé !",
            theme_added: "ajouté !"
        },
        buttons: {
            switch: "Changer",
            confirmation: "Ça ne peut pas être annulé!",
            delete_local: "Supprimer le Stockage local",
            delete_themes: "Supprimer des thèmes",
            remove: "Retirer",
            save: "Sauvegarder",
            use: "Utiliser"
        },
        time: {
            months: {
                long: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Noemvber", "Décembre"],
                short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            days: {
                long: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
            }
        },
        misc: {
            theme: "Thème"
        }
    }
}