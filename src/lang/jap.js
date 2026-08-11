/**
 * @license Shikai
 * jap.js
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    names: {
        short: "jap",
        long: "japanese"
    },
    data: {
        demo: {
            hostname: "ホスト名",
            notifications: {
                info: "情報通知",
                success: "成功通知",
                warning: "警告通知",
                error: "エラー通知"
            },
            hint: "ヒント:",
            hints: [
                "パスワードは「password」です",
                "画面左上にカーソルを合わせると表示されます",
                "背景をクリックすると変更できます",
                "設定メニューを閉じると変更が保存されます",
                "60秒間操作がないと idle 状態になります",
                "ドラッグハンドルをダブルクリックすると初期位置に戻ります"
            ]
        },
        commands: {
            names: {
                sleep: "スリープ",
                reboot: "再起動",
                shutdown: "シャットダウン",
                hibernate: "休止状態"
            },
            messages: {
                sleep: "スリープに移行中...",
                reboot: "再起動中...",
                shutdown: "シャットダウン中...",
                hibernate: "休止状態に移行中...",
                unavailable: "この操作は利用できません"
            }
        },
        settings: {
            behaviour: {
                name: "動作設定",
                sections: {
                    lang: {
                        name: "言語"
                    },
                    general: {
                        name: "全般",
                        options: {
                            logo: "ロゴを表示",
                            hostname: "ホスト名を表示",
                            avatar: "アバターを表示",
                            username: "ユーザー名を表示",
                            session: "セッションを表示"
                        }
                    },
                    commands: {
                        name: "電源コマンド",
                        options: {
                            shutdown: "シャットダウンを有効化",
                            reboot: "再起動を有効化",
                            sleep: "スリープを有効化",
                            hibernate: "休止状態を有効化"
                        }
                    },
                    time: {
                        name: "日付と時刻",
                        options: {
                            clock: {
                                enabled: "時計を表示",
                                format: "時計の形式"
                            },
                            date: {
                                enabled: "日付を表示",
                                format: "日付の形式"
                            }
                        }
                    },
                    misc: {
                        name: "その他",
                        options: {
                            idle: {
                                enabled: "無操作時に非表示",
                                value: "タイムアウト時間 (秒)"
                            },
                            evoker: "設定ボタンを非表示"
                        }
                    }
                }
            },
            style: {
                name: "スタイル設定",
                sections: {
                    main: {
                        name: "メイン",
                        options: {
                            avatar: "アバターの色",
                            text: "文字色",
                            sidebar: "サイドバーの色",
                            userbar_top: "ユーザーバー (上部) の色",
                            userbar_bottom: "ユーザーバー (下部) の色",
                            session_text: "セッション文字色",
                            session_background: "セッション背景色",
                            password_text: "パスワード文字色",
                            password_background: "パスワード背景色",
                            icon_background: "アイコン背景色",
                            icon_foreground: "アイコン前景色"
                        }
                    },
                    misc: {
                        name: "その他",
                        options: {
                            vertical: "パスワード枠線 (上下)",
                            horizontal: "パスワード枠線 (左右)",
                            password: "パスワード枠線の角丸",
                            session: "セッション枠線の角丸",
                            caret: {
                                left: "パスワード左側の装飾記号",
                                right: "パスワード右側の装飾記号"
                            }
                        }
                    }
                }
            },
            themes: {
                name: "テーマ",
                current: {
                    name: "現在のテーマ",
                    option: "名前"
                },
                saved: "保存済み"
            }
        },
        notifications: {
            logged_in: "ログイン中:",
            wrong_password: "パスワードが正しくありません",
            delete_local: "LocalStorage を削除しました",
            delete_themes: "テーマを削除しました",
            theme_activated: "が有効化されました",
            theme_removed: "が削除されました",
            theme_added: "が追加されました"
        },
        buttons: {
            switch: "切り替え",
            confirmation: "この操作は取り消せません",
            delete_local: "LocalStorage を削除",
            delete_themes: "テーマを削除",
            remove: "削除",
            save: "保存",
            use: "適用"
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