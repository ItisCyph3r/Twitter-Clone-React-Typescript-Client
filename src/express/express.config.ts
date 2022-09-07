import { UUID } from "../conponents/getCurrentDate";

export const setTweet = async(prop: string) => {
        
    return fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tweet: prop, 
            uuid: UUID(),
            date: new Date()
        })
    })
    .then(data => {
        data.json()
        console.log(data)
    })
}

export const deleteTweet = (props: string) => {
    return fetch('/delete_tweet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tweet: props
        })
    })
    .then(data => {
        data.json()
        console.log(data)
    })
}



