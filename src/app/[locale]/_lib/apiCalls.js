const { default: axios } = require("axios")

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const getSinglePage = (path, locale, params) => axios.get(`${apiUrl}/${path}?locale=${locale}&${params}`)
    .then((resp) => resp.data)
    .catch((error) => error.message)