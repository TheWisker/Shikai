/**
 * @license Shikai
 * jap.js
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    names: {
        short: "jap",
        long: "japanesse"
    },
    data: {
        demo: {
            hostname: "ホスト名",
            notifications: {
                info: "インフォ通知！",
                success: "合格通知！",
                warning: "警告通知！",
                error: "エラー通知！"
            },
            hint: "ヒント：",
            hints: [
                "パスワードは「password」です!",
                "左上隅にカーソルを合わせます。",
                "背景をクリックして変更します。",
                "設定メニューを閉じて、変更を保存してください!",
                "非アクティブ状態が 60 秒続くと、テーマはアイドル状態になります。",
                "ドラッグ ハンドルをダブルクリックして、デフォルトの位置に戻します。"
            ]
        },
        commands: {
            names: {
                sleep: "寝る",
                reboot: "リブート",
                shutdown: "電源を切る",
                hibernate: "冬眠する"
            },
            messages: {
                sleep: "昼寝をしている...",
                reboot: "再起動しています...",
                shutdown: "シャットダウンしています...",
                hibernate: "冬眠中...",
                unavailable: "アクションが利用できません!"
            }
        },
        settings: {
            behaviour: {
                name: "行動",
                sections: {
                    lang: {
                        name: "言語"
                    },
                    general: {
                        name: "一般",
                        options: {
                            logo: "ロゴが有効",
                            hostname: "ホスト名が有効",
                            avatar: "アバター有効",
                            username: "ユーザー名が有効",
                            session: "セッションが有効"
                        }
                    },
                    commands: {
                        name: "コマンド",
                        options: {
                            shutdown: "電源オフが有効",
                            reboot: "再起動が有効",
                            sleep: "スリープ有効",
                            hibernate: "休止状態が有効"
                        }
                    },
                    time: {
                        name: "時計と日付",
                        options: {
                            clock: {
                                enabled: "クロック有効",
                                format: "時計のフォーマット"
                            },
                            date: {
                                enabled: "有効日",
                                format: "日付形式"
                            }
                        }
                    },
                    misc: {
                        name: "その他",
                        options: {
                            idle: {
                                enabled: "アイドル状態で非表示",
                                value: "アイドル タイムアウト (秒)"
                            },
                            evoker: "設定ボタンが見えない"
                        }
                    }
                }
            },
            style: {
                name: "スタイル",
                sections: {
                    main: {
                        name: "主要",
                        options: {
                            avatar: "主要",
                            text: "テキストの色",
                            sidebar: "サイドバーの色",
                            userbar_top: "ユーザーバーの上部の色",
                            userbar_bottom: "ユーザーバーの下部の色",
                            session_text: "セッションのテキストの色",
                            session_background: "セッションの背景色",
                            password_text: "パスワードのテキストの色",
                            password_background: "パスワードの背景色",
                            icon_background: "アイコンの背景色",
                            icon_foreground: "アイコンの前景色",                            
                        }
                    },
                    misc: {
                        name: "その他",
                        options: {
                            vertical: "パスワードの上下の境界線",
                            horizontal: "パスワードの左右の境界線",
                            password: "パスワード境界半径",
                            session: "セッション境界半径"
                        }
                    }
                }
            },
            themes: {
                name: "テーマ",
                current: {
                    name: "現在",
                    option: "名前"
                },
                saved: "保存しました"
            }
        },
        notifications: {
            logged_in: "次のユーザーとしてログイン",
            wrong_password: "間違ったパスワード！",
            delete_local: "ローカルストレージが削除されました!",
            delete_themes: "テーマが削除されました！",
            theme_activated: "活性化！",
            theme_removed: "削除されました！",
            theme_added: "追加した！"
        },
        buttons: {
            switch: "スイッチ",
            confirmation: "これは、元に戻すことはできません！",
            delete_local: "ローカルストレージ を削除する",
            delete_themes: "テーマを削除する",
            remove: "削除",
            save: "保存",
            use: "使用"
        },
        time: {
            months: {
                long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
            },
            days: {
                long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
                short: ["日", "月", "火", "水", "木", "金", "土"]
            }
        },
        misc: {
            theme: "テーマ"
        }
    }
}