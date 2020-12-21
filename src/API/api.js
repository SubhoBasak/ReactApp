const BASE_URL = 'http://127.0.0.1:8000'
export const MEDIA_URL = 'http://127.0.0.1:8000'

const banner_api = BASE_URL+'/banner'
const market_api = BASE_URL+'/market'
const product_api = BASE_URL+'/product'
const user_api = BASE_URL+'/user'

// Banner APIs
export function big_banners(json_cb){
    fetch(banner_api+'/big_banners/')
        .then(res => res.json())
        .then(json => json_cb(json))
}

// Product APIs
export function all_categories(json_cb){
    fetch(product_api+'/all_categories/')
        .then(res => res.json())
        .then(json => json_cb(json))
}

export function product_list(json_cb){
    fetch(product_api+'/product_list/')
        .then(res => res.json())
        .then(json => json_cb(json))
}

export function product_details(pid, json_cb){
    fetch(product_api+'/product_details/'+pid)
        .then(res => res.json())
        .then(json => json_cb(json))
}