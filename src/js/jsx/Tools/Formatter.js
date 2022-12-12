/**
 * @license FormatterJS
 * formatter.js
 *
 * Copyright (c) TheWisker.
 *
 * This source code is licensed under the GNU license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

export default function format(date, format, utc) {
    const months = {
        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Noemvber", "December"],
        short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
    const days = {
        long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    }

    function zeroFormat(n, ln) {
        n = n + "";
        while (n.length < (ln || 2)) n = "0" + n;
        return n;
    }
    
    //Literal
    format = format.replaceAll(/(%%)/g, "\x01%\x01");

    //Year
    format = format.replaceAll(/(%Y)/g, utc ? date.getUTCFullYear() : date.getFullYear());
    format = format.replaceAll(/(%y)/g, date.getYear());
    format = format.replaceAll(/(%J)/g, () => {
        let count = utc ? date.getUTCDate() : date.getDate();
        for (let i = (utc ? date.getUTCMonth() : date.getMonth()); i > 0; i--) {
            if (i != 1) {
                if ((i <= 6 && (i % 2) == 0) || (i >= 7 && (i % 2) == 1)) {count += 31;} else {count += 30;}
            } else {
                if (((utc ? date.getUTCFullYear() : date.getFullYear()) % 4) == 0) {count += 29;} else {count += 28;}
            }
        }
        return count;
    });

    //Month
    format = format.replaceAll(/(%M)/g, zeroFormat((utc ? date.getUTCMonth() : date.getMonth()) + 1));
    format = format.replaceAll(/(%m)/g, (utc ? date.getUTCMonth() : date.getMonth()) + 1);
    format = format.replaceAll(/(%B)/g, months.long[utc ? date.getUTCMonth() : date.getMonth()]);
    format = format.replaceAll(/(%b)/g, months.short[utc ? date.getUTCMonth() : date.getMonth()]);

    //Day
    format = format.replaceAll(/(%D)/g, zeroFormat(utc ? date.getUTCDate() : date.getDate()));
    format = format.replaceAll(/(%d)/g, utc ? date.getUTCDate() : date.getDate());

    //Weekday
    format = format.replaceAll(/(%A)/g, days.long[utc ? date.getUTCDay() : date.getDay()]);
    format = format.replaceAll(/(%a)/g, days.short[utc ? date.getUTCDay() : date.getDay()]);
    format = format.replaceAll(/(%W)/g, (utc ? date.getUTCDay() : date.getDay()) + 1);

    //Hours
    format = format.replaceAll(/(%H)/g, zeroFormat(utc ? date.getUTCHours() : date.getHours()));
    format = format.replaceAll(/(%I)/g, zeroFormat((utc ? date.getUTCHours() : date.getHours()) > 12 ? (utc ? date.getUTCHours() : date.getHours()) - 12 : (utc ? date.getUTCHours() : date.getHours())));
    format = format.replaceAll(/(%h)/g, utc ? date.getUTCHours() : date.getHours());
    format = format.replaceAll(/(%i)/g, (utc ? date.getUTCHours() : date.getHours()) > 12 ? (utc ? date.getUTCHours() : date.getHours()) - 12 : (utc ? date.getUTCHours() : date.getHours()));
    
    //Minutes
    format = format.replaceAll(/(%K)/g, zeroFormat(utc ? date.getUTCMinutes() : date.getMinutes()));
    format = format.replaceAll(/(%k)/g, utc ? date.getUTCMinutes() : date.getMinutes());

    //Seconds
    format = format.replaceAll(/(%S)/g, zeroFormat(utc ? date.getUTCSeconds() : date.getSeconds()));
    format = format.replaceAll(/(%s)/g, utc ? date.getUTCSeconds() : date.getSeconds());

    //Tenths of a second
    format = format.replaceAll(/(%L)/g, Math.round(utc ? date.getUTCMilliseconds() : date.getMilliseconds() / 100));

    //Hundredths of a second
    format = format.replaceAll(/(%Q)/g, zeroFormat(Math.round(utc ? date.getUTCMilliseconds() : date.getMilliseconds() / 10), 2));
    format = format.replaceAll(/(%q)/g, Math.round(utc ? date.getUTCMilliseconds() : date.getMilliseconds()) / 10);
    
    //Miliseconds
    format = format.replaceAll(/(%F)/g, zeroFormat(utc ? date.getUTCMilliseconds() : date.getMilliseconds(), 3));
    format = format.replaceAll(/(%f)/g, utc ? date.getUTCMilliseconds() : date.getMilliseconds());

    //AM or PM
    format = format.replaceAll(/(%P)/g, (utc ? date.getUTCHours() : date.getHours()) > 12 ? "PM" : "AM");
    format = format.replaceAll(/(%p)/g, (utc ? date.getUTCHours() : date.getHours()) > 12 ? "pm" : "am");

    //Timezone offset
    format = format.replaceAll(/(%T)/g, date.getTimezoneOffset() >= 0 ? "+" + zeroFormat(Math.floor(((date.getTimezoneOffset() + 1) / 60) - (1 / 60))) : "-" + zeroFormat(Math.floor(Math.abs(date.getTimezoneOffset()) / 60)));
    format = format.replaceAll(/(%t)/g, date.getTimezoneOffset() >= 0 ? "+" + Math.floor(((date.getTimezoneOffset() + 1) / 60) - (1 / 60)) : "-" + Math.floor(Math.abs(date.getTimezoneOffset()) / 60));

    //Clean
    format = format.replaceAll(/(\\x01%\\x01)/g, "%");

    return format;
};