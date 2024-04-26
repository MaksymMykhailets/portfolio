// export const api;

import axios from 'axios';

const baseUrlReviews = "https://portfolio-js.b.goit.study/api/reviews";

async function getApi() {
    const { data } = await axios.get(`${baseUrlReviews}`, {
    headers: {
        Accept: "application/json"
    },
    method: "Get"
    })
    console.log(data);
    return data;

    
}

getApi()