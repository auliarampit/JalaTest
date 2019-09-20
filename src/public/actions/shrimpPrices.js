import axios from 'axios';
import URL from "../URL";

export const getUdang = (search, sort) => {
    return {
        type: 'GET_UDANG',
        payload: axios.get(URL+`/shrimp_prices?search=${search}&with=creator,species,region&sort=size_100,${sort}&region_id=`)
    }
}