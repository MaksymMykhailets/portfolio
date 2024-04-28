import axios from 'axios';

const baseUrlReviews = "https://portfolio-js.b.goit.study/api/reviews";

 export async function getApi() {
    const { data } = await axios.get(`${baseUrlReviews}`, {
    headers: {
        Accept: "application/json"
    },
    method: "Get"
    })
    return data;

}

