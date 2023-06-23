/**
 * @license Shikai
 * arb.js
 *
 * Copyright (c) 2023, TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    names: {
        short: "arb",
        long: "arabic"
    },
    data: {
        demo: {
            hostname: "المضيف",
            notifications: {
                info: "!تنبيه",
                success: "!تنبيه بنجاح العملية",
                warning: "!تنبيه تحذيري",
                error: "!حدث خطأ ما"
            },
            hint: "تَلمِيح:",
            hints: [
                "!'password' كلمة المرور هي",
                "!قم بوضع المؤشر في الزاوية العلوية يسار الشاشة",
                "!إضغط على الخلفية لتغييرها",
                "!أغلق الإعدادات لتقوم بحفظها",
                "!بعد 60 ثانية من الثبات الشاشة ستغلَق",
                "!قم بالضغط مرتين على شريط التمرير لإرجاع الوضع الإفتراضي"
            ]
        },
        commands: {
            names: {
                sleep: "السكون",
                reboot: "إعادة التشغيل",
                shutdown: "إطفاء الجهاز",
                hibernate: "السبات"
            },
            messages: {
                sleep: "...أخذ قسط من الراحة",
                reboot: "...إعادة التشغيل",
                shutdown: "...إغلاق الجهاز",
                hibernate: "...أخذ سبات عميق",
                unavailable: "العملية غير متاحة حالياً"
            }
        },
        settings: {
            behaviour: {
                name: "السلوك",
                sections: {
                    lang: {
                        name: "اللغة"
                    },
                    general: {
                        name: "عام",
                        options: {
                            logo: "إظهار الشعار",
                            hostname: "إظهار اسم المضيف",
                            avatar: "إظهار صورة الحساب الشخصية",
                            username: "إظهار اسم الحساب",
                            session: "إظهار اسم الجلسة"
                        }
                    },
                    commands: {
                        name: "الأوامر",
                        options: {
                            shutdown: "إظهار زر إيقاف التشغيل",
                            reboot: "إظهار زر إعادة التشغيل",
                            sleep: "إظهار زر السكون",
                            hibernate: "إظهار زر السبات"
                        }
                    },
                    time: {
                        name: "التاريخ والوقت",
                        options: {
                            clock: {
                                enabled: "إظهار الساعة",
                                format: "ماهية الساعة"
                            },
                            date: {
                                enabled: "إظهار التاريخ",
                                format: "ماهية التاريخ"
                            }
                        }
                    },
                    misc: {
                        name: "منوعات",
                        options: {
                            idle: {
                                enabled: "الإخفاء عند الثبات",
                                value: "(ثوانٍ) الإخفاء عند"
                            },
                            evoker: "إخفاء زر الإعدادات"
                        }
                    }
                }
            },
            style: {
                name: "الطابع",
                sections: {
                    main: {
                        name: "الرئيسية",
                        options: {
                            avatar: "لون حواف الصورة الشخصية",
                            text: "لون النص",
                            sidebar: "لون الشريط الجانبي",
                            userbar_top: "لون الشريط العلوي",
                            userbar_bottom: "لون الشريط السفلي",
                            session_text: "لون نص الجلسة",
                            session_background: "لون خلفية الجلسة",
                            password_text: "لون كلمة المرور",
                            password_background: "لون خلفية كلمة المرور",
                            icon_background: "لون خلفية الآيقونة",
                            icon_foreground: "اللون الأمامي للآيقونة",
                        }
                    },
                    misc: {
                        name: "منوعات",
                        options: {
                            vertical: "حجم حدود كلمة المرور العامودية",
                            horizontal: "حجم حدود كلمة المرور الأفقية",
                            password: "حجم قطر خانة كلمة المرور",
                            session: "حجم قطر خانة الجلسة"
                        }
                    }
                }
            },
            themes: {
                name: "السمات",
                current: {
                    name: "الحالي",
                    option: "الاسم"
                },
                saved: "تم الحفظ"
            }
        },
        notifications: {
            logged_in: "تم تسجيل الدخول كـ",
            wrong_password: "!كلمة المرور خاطئة",
            delete_local: "!حذف التخزين المحلي",
            delete_themes: "!تم حذف السمات",
            theme_activated: "!تم التفعيل",
            theme_removed: "!تم الحذف",
            theme_added: "!تمت الإضافة"
        },
        buttons: {
            switch: "التبديل",
            confirmation: "!لا بمكن تغيير هذا",
            delete_local: "حذف التخزين المحلي",
            delete_themes: "حذف السمات",
            remove: "حذف",
            save: "حفظ",
            use: "استخدام"
        },
        time: {
            months: {
                long: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
            },
            days: {
                long: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                short: ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"]
            }
        },
        misc: {
            theme: "السمة"
        }
    }
}
