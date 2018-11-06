import axios from 'axios';

const endSession = () => ({
    type: 'LOG_OUT_USER',
    user: {
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        dni: '',
        cellphone: '',
        access: false,
        wrongPassword: ''
    }
})

const setLoggedUser = user => ({
    type: 'LOG_WITH_USER',
    user,
});

const sayWrongPassword = e => ({
    type: 'WRONG_PASSWORD',
    message: 'Contraseña incorrecta'
})

export const loginUser = (email, password) => dispatch => {
    axios.post('/api/user/logged', {
        email,
        password
    })
    .then(res => res.data)
    .then(user => dispatch(setLoggedUser(user)))
    .catch(e => dispatch(sayWrongPassword(e)));
}

export const logOutUser = () => dispatch => {
    axios.get('/api/user/logout')
    .then(nothing => dispatch(endSession()));
}