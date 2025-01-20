import axios from "axios";
const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "6f372f0744msh8a5cb5b13eb958cp1b42dajsn014f943862f6",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
export default api;
