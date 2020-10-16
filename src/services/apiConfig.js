import Axios from 'axios'
export const JwtToken = () => localStorage.getItem('token') || null;

const apiUrl = 'http://messenger-django-api.herokuapp.com/'

const Api = Axios.create({
  baseURL: apiUrl,
  headers: {
		Authorization: `JWT ${JwtToken()}`
  }
})

export const changeHeader = async () => {
  Api.defaults.headers['Authorization'] = `JWT ${JwtToken()}`;
}

export const clearHeader = () => {
  Api.defaults.headers['Authorization'] = null;
}

export default Api