import axios from 'axios';
import URL from "../URL";

export const getUdang = (search, sort) => {
    return {
        type: 'GET_UDANG',
        payload: axios.get(URL+`/shrimp_prices?search=${search}&with=creator,species,region&sort=size_100,${sort}&region_id=`)
    }
}

export const getRegion = (search,) => {
    return {
        type: 'GET_REGION',
        payload: axios.get(`https://app.jala.tech/api/regions?search&sort=&scope=regency`)
    }
} 