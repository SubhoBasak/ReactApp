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

// Market APIs
export function all_shops(json_cb, load_cb){
    fetch(market_api+'/shops/', {headers:
            {Authorization: 'token ad914a410357f232708ee12c0ee0834fd0c04e27'}
    })
        .then(res => res.json())
        .then(json => {
            json_cb(json)
            load_cb(true)
        })
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

export function product_details(pid, json_cb, flag_cb){
    fetch(product_api+'/product_details/'+pid)
        .then(res => res.json())
        .then(json => {
            json_cb(json)
            flag_cb(true)
        })
}

// User APIs
export function contact_list(json_cb, flag_cb){
    fetch(user_api+'/contact_list/', {headers:
            {Authorization: 'token ad914a410357f232708ee12c0ee0834fd0c04e27'}})
        .then(res => res.json())
        .then(json => {
            json_cb(json)
            flag_cb(true)
        })
}

export function contact_us(data, res_cb){
    fetch(user_api+'/contact_us/', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => {
            if(res.status === 200){
                res_cb(true)
            }
            else{
                res_cb(false)
            }
        })
}
