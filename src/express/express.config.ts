import { GetCurrentDate, UUID } from "../conponents/getCurrentDate";

// export const getList = async() => {
//     return fetch('/api')
//     .then(data => data.json())
//     .then(user => console.log(user))
// }


export const setTweet = async(prop: string) => {
    const rawDate = new Date().toLocaleString();

    return fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tweet: prop, 
            uuid: UUID(),
            date: rawDate,
            formattedDate: GetCurrentDate()})
    })
    .then(data => {
        data.json()
        console.log(data)
    })
}

export const deleteTweet = (props: number) => {
    return fetch('/')
}