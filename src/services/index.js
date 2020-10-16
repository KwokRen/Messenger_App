import Api from './apiConfig';
import { changeHeader, clearHeader } from './apiConfig';

// export const register = async (userData) => {
//     try {
//         const resp = await Api.post('/register', userData);
//         if (resp.status === 201) {
//             await clearHeader();
//             await localStorage.setItem('token', resp.data.token);
//             await changeHeader();
//         }
//         return resp;
//     } catch (error) {
//         throw error
//     }
// }


export const login = async (userData) => {
    try {
        await clearHeader()
        const resp = await Api.post('auth/users/login/', userData);
        if (resp.status === 200) {
            await clearHeader();
            await localStorage.setItem('token', resp.data.token);
            await localStorage.setItem('user', resp.data.username);
            await changeHeader();
        }
        return resp;
    } catch (error) {
        throw error
    }
}

export const getMessages = async () => {
   try {
       const resp = await Api.get('cloud_msg/messages/');
       return resp;
   } catch (error) {
       throw error;
   }
}