// import axios, { AxiosResponse } from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { authActions } from './auth-Slice';


// export default function LoginAPI() {

// // export const loginAPI = () => {}

//     const dispatch = useDispatch();

//     const userObject = useSelector((state: any) => state.auth.userAuth);

//     // const [userObject, setUserObject] = useState<any>();

//     useEffect(() => {
//         axios.get("http://localhost:4000/getuser", { withCredentials: true} )
//         .then((res: AxiosResponse) => {
//             if (res.data) {
//                 // console.log(res.data)
//                 // setUserObject(res.data)
//                 dispatch(authActions.login(res.data))
//             }
//         })
//     }, [])
//     return userObject;
// }
