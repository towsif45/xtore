import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
let TOKEN = null;

if (localStorage.getItem("persist:root") !== null) {
  if (JSON.parse(localStorage.getItem("persist:root")).user !== null) {
    if (
      JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser !== null
    ) {
      TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        .currentUser.accessToken;
    }
  }
}
console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
