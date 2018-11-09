import axios from 'axios';
import {addCartFromStorage ,setCartFromBD} from './CartActions'


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

const updateAdminState = (user) => ({
    type: 'UPDATE_ADMIN_STATE',
    user
});

const setLoggedUser = user => ({
    type: 'LOG_WITH_USER',
    user
});

const sayWrongPassword = e => ({
    type: 'WRONG_PASSWORD',
    message: 'Contraseña incorrecta'
});

export const loginUser = (email, password) => dispatch => {
    axios.post('/api/user/logged', {
        email,
        password
    })
    .then(res => res.data)
    .then(user => dispatch(setLoggedUser(user)))
    .catch(e => dispatch(sayWrongPassword(e)));
}
export const isLogged = () => dispatch => {
    axios.get('/me')
    .then(res => dispatch(setLoggedUser(res.data)))
    .then(res => dispatch(setCartFromBD()))
    .catch(e => {
        let session = JSON.parse(localStorage.getItem('cart'));
        if(Object.keys(session).length > 0){
            dispatch(addCartFromStorage(session))
        }
    });
}

export const logOutUser = () => dispatch => {
    axios.get('/api/user/logout')
    .then(nothing => dispatch(endSession()));
}

export const convertUserToAdmin = (email) => dispatch => {
    axios.post('/api/user/createAdmin', {email})
    .then(user => dispatch(updateAdminState(user)));
}

export const removeAdminPermission = (email) => dispatch => {
    axios.post('/api/user/removeAdmin', {email})
    .then(user => dispatch(updateAdminState(user)));
}