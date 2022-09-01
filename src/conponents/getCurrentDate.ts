
export const GetCurrentDate = () => {
    var today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),

    date = mm + '/' + dd + '/' + yyyy;

	var curHour = today.getHours() > 12 ? today.getHours() - 12 : (today.getHours() < 10 ? "0" + today.getHours() : today.getHours()),
	curMinute = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
	curSeconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds(),
	curMeridiem = today.getHours() > 12 ? "PM" : "AM",
    time = curHour + ":" + curMinute + "." + curSeconds + curMeridiem 
    
    return (
        time + ' ' + date
    )
}

export const UUID = () => {
    return (new Date().getTime() * Math.random() * 1000000)
}