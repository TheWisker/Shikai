/**
 * @license Shikai
 * chi.js
 *
 * Copyright (c) 2024, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    names: {
        short: "chi",
        long: "chinese"
    },
    data: {
        demo: {
            hostname: "主机名",
            notifications: {
                info: "信息通知",
                success: "成功通知",
                warning: "警告通知",
                error: "错误通知"
            },
            hint: "提示：",
            hints: [
                "密码是“password”！",
                "将鼠标移动到左上角即可显示",
                "点击背景可以更换壁纸",
                "关闭设置菜单后即可保存更改",
                "60 秒无操作后主题将进入空闲状态",
                "双击拖动手柄可以恢复默认位置"
            ]
        },
        commands: {
            names: {
                sleep: "睡眠",
                reboot: "重启",
                shutdown: "关机",
                hibernate: "休眠"
            },
            messages: {
                sleep: "正在进入睡眠模式……",
                reboot: "正在重启……",
                shutdown: "正在关机……",
                hibernate: "正在进入休眠模式……",
                unavailable: "此操作不可用"
            }
        },
        settings: {
            behaviour: {
                name: "行为设置",
                sections: {
                    lang: {
                        name: "语言"
                    },
                    general: {
                        name: "常规",
                        options: {
                            logo: "显示 Logo",
                            hostname: "显示主机名",
                            avatar: "显示头像",
                            username: "显示用户名",
                            session: "显示会话"
                        }
                    },
                    commands: {
                        name: "电源操作",
                        options: {
                            shutdown: "启用关机",
                            reboot: "启用重启",
                            sleep: "启用睡眠",
                            hibernate: "启用休眠"
                        }
                    },
                    time: {
                        name: "日期与时间",
                        options: {
                            clock: {
                                enabled: "显示时钟",
                                format: "时钟格式"
                            },
                            date: {
                                enabled: "显示日期",
                                format: "日期格式"
                            }
                        }
                    },
                    misc: {
                        name: "其他",
                        options: {
                            idle: {
                                enabled: "空闲时隐藏",
                                value: "空闲超时时间（秒）"
                            },
                            evoker: "隐藏设置按钮"
                        }
                    }
                }
            },
            style: {
                name: "样式设置",
                sections: {
                    main: {
                        name: "主要",
                        options: {
                            avatar: "头像颜色",
                            text: "文字颜色",
                            sidebar: "侧边栏颜色",
                            userbar_top: "用户栏顶部颜色",
                            userbar_bottom: "用户栏底部颜色",
                            session_text: "会话文字颜色",
                            session_background: "会话背景颜色",
                            password_text: "密码文字颜色",
                            password_background: "密码背景颜色",
                            icon_background: "图标背景颜色",
                            icon_foreground: "图标前景颜色"
                        }
                    },
                    misc: {
                        name: "其他",
                        options: {
                            vertical: "密码框上下边框",
                            horizontal: "密码框左右边框",
                            password: "密码框圆角",
                            session: "会话框圆角",
                            caret: {
                                left: "密码框左侧装饰符号",
                                right: "密码框右侧装饰符号"
                            }
                        }
                    }
                }
            },
            themes: {
                name: "主题",
                current: {
                    name: "当前主题",
                    option: "名称"
                },
                saved: "已保存"
            }
        },
        notifications: {
            logged_in: "登录用户：",
            wrong_password: "密码错误！",
            delete_local: "LocalStorage 已删除！",
            delete_themes: "主题已删除！",
            theme_activated: "已启用！",
            theme_removed: "已移除！",
            theme_added: "已添加！"
        },
        buttons: {
            switch: "切换",
            confirmation: "此操作无法撤销！",
            delete_local: "删除 LocalStorage",
            delete_themes: "删除主题",
            remove: "移除",
            save: "保存",
            use: "应用"
        },
        time: {
            months: {
                long: [
                    "一月", "二月", "三月", "四月", "五月", "六月",
                    "七月", "八月", "九月", "十月", "十一月", "十二月"
                ],
                short: [
                    "1月", "2月", "3月", "4月", "5月", "6月",
                    "7月", "8月", "9月", "10月", "11月", "12月"
                ]
            },
            days: {
                long: [
                    "星期日", "星期一", "星期二", "星期三",
                    "星期四", "星期五", "星期六"
                ],
                short: [
                    "日", "一", "二", "三", "四", "五", "六"
                ]
            }
        },
        misc: {
            theme: "主题"
        }
    }
}
