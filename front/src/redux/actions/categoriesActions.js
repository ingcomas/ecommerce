import axios from 'axios'

const getCategories = (categories) => ({
    type : 'GET_CATEGORIES',
    categories
})

export const axiosCategories = () => (dispatch) => {
    
    axios.get(`/api/categories`)
    .then(catArray=>dispatch(getCategories(catArray)))
    
}