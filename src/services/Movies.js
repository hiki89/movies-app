import axios from 'axios'

export default class Movies {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('movies')
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve([
        //             {
        //                 id: 1,
        //                 name: 'Admin'
        //             }
        //         ])
        //     }, 2000)
        // })
    }
}

export const movies = new Movies()