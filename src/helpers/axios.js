import axios from "axios";

let requestService = axios.create({
    baseURL: "https://api.coinpaprika.com/v1"
});

export {
    requestService
};