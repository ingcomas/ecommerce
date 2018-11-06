import axios from 'axios';

const setUsers = (users) => ({
    type: 'GET_ALL_USERS',
    allUsers: users
});

export const searchForUsers = () => dispatch => {
    axios.get('/api/user/allUsers')
    .then(res => res.data)
    .then(users => dispatch(setUsers(users)));
}