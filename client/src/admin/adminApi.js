import { API } from '../config'

exports.createCategory = (userId, token, category) => {
    // console.log(user)
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
}

exports.createProduct = (userId, token, product) => {
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            // to send form data so dont need Content-Type
            Authorization: `Bearer ${token}`
        },
        body: product //sent in form data because of photo
    })
    .then(response => {
        return response.json()
    })
    .catch(error => {
        console.log(error)
    })
}

exports.getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}