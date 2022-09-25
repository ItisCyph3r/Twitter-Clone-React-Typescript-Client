// import React, { createContext, useEffect, useState } from 'react'
// import axios, { AxiosResponse } from 'axios';

// export const myContext = createContext({});

// export function Context(props: any) {
//     const [userObject, setuserObject] = useState<any>();
//     // console.log(userObject)
    
//     useEffect(() => {
//         axios.get("http://localhost:4000/getuser", {withCredentials: true})
//         .then((res: AxiosResponse) => {
//             if (res.data) return setuserObject(res.data)
//         })
//     }, [])
//     return (
//         <myContext.Provider value={userObject}>
//             {props.children}
//         </myContext.Provider>
            
//     )
// }









































// import React, { createContext, useEffect, useState } from 'react'

// export const myContext = createContext({});

// export function Context(props: any) {
//     const [userObject, setuserObject] = useState<any>();

//     const fetchUserAuth = async () => {
//         const obj = {
//             method: 'GET',
//             withCredentials: true,
//             headers: {
//                 'Authorization': 'Bearer ' + key,
//                 'Content-Type': 'application/json'
//             }
//         }
//         return fetch('http://localhost:4000/getuser', obj)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setuserObject(data)
//             })
//         }

//         useEffect(() => {
//             fetchUserAuth()
//         }, [userObject])
//     return (
//         <myContext.Provider value={userObject}>
//             {props.children}
//         </myContext.Provider>
            
//     )
// }
