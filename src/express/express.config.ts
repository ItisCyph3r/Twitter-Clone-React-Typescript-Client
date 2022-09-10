import { useContext } from "react";
import { myContext } from "../conponents/context";
import { UUID } from "../conponents/getCurrentDate";
import { IUser } from "../types/maintypes";


// export function SetTweet(prop: string) {
export const SetTweet = async (prop: string) => {
    const userObject = useContext(myContext) as IUser;

    const data = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // author: userObject.username,
            tweet: prop,
            uuid: UUID(),
            date: new Date()
        })
    });
    data.json();
    console.log(data);
}


// export const SetTweet = async(prop: string) => {
    
//     const userObject = useContext(myContext) as IUser;

//     return fetch('/api', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             // author: userObject.username,
//             tweet: prop, 
//             uuid: UUID(),
//             date: new Date()
//         })
//     })
//     .then(data => {
//         data.json()
//         console.log(data)
//     })
// }

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



