import Api from './apiConfig';
import { changeHeader, clearHeader } from './apiConfig';

export const register = async (userData) => {
    await clearHeader()
    try {
        const resp = await Api.post('auth/users/register/', userData);
        console.log(resp)
        if (resp.status === 201) {
            await clearHeader();
            await localStorage.setItem('token', resp.data.token);
            await changeHeader();
            const resp2 = await Api.post('cloud_msg/UserProfiles/', {avatar: null});
            console.log(resp2)
        }
        return resp;
    } catch (error) {
        throw error
    }
}

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

export const logout = async () => {
    try {
        if (localStorage.getItem('token')) {
            await clearHeader();
            window.localStorage.removeItem('token');
        }
    } catch (error) {
        throw error
    }
}

export const getMessages = async () => {
   try {
       const resp = await Api.get('cloud_msg/messages/');
    //    console.log(resp);
       return resp;
   } catch (error) {
       throw error;
   }
}

export const updateProfile = async (userProfileData, profileID) => {
    try {
        const resp = await Api.put(`cloud_msg/UserProfiles/${profileID}/`, userProfileData);
        return resp;
    } catch (error) {
        throw error;
    }
 }

 export const deleteUser= async (userID) => {
    try {
        const resp = await Api.delete(`auth/users/user/`);
        return resp;
    } catch (error) {
        throw error;
    }
 }