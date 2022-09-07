export const parseCurrentDate = (tdate: any) => {
    var system_date: any = new Date(Date.parse(tdate));
    var user_date: any = new Date();
    // if (K.ie) {
    //     system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
    // }
    var diff = Math.floor((user_date - system_date) / 1000);
    // if (diff <= 1) {return "just now";}
    if (diff <= 60) {return diff + "s";}
    // if (diff < 40) {return "half a minute ago";}
    // if (diff < 60) {return "less than a minute ago";}
    if (diff <= 90) {return "1m";}

    // if (diff <= 3540) {return Math.round(diff / 60) + " minutes ago";}
    if (diff <= 3540) {return Math.round(diff / 60) + "m";}

    // if (diff <= 5400) {return "1 hour ago";}
    if (diff <= 5400) {return "1h";}

    // if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago";}
    if (diff <= 86400) {return Math.round(diff / 3600) + "h";}

    // if (diff <= 129600) {return "1 day ago";}
    if (diff <= 129600) {return "1d";}

    // if (diff < 604800) {return Math.round(diff / 86400) + " days ago";}
    if (diff < 604800) {return Math.round(diff / 86400) + "d";}

    // if (diff <= 777600) {return "1 week ago";}
    if (diff <= 777600) {return "1w";}

    console.log(system_date)
    
    return "on " + system_date;
}

export const UUID = () => {
    return (new Date().getTime() * Math.random() * 1000000)
}