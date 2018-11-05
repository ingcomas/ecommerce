import axios from 'axios';

const login = (user) => ({
    type:'RECIVE_LOGIN',
    user
})

export const logInfo = (email,password) => (dispatch) =>{
    axios.post('/api/user/logged', {
        email: email,
        password: password
    })
    .then(res => res.data)
    .then(data => dispatch(login(data)))
}