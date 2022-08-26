import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDc1YTlmYzEzYTQ3MjZkOWU1NWJiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQyNzc4NSwiZXhwIjoxNjY2NjExNzg1fQ.BmQ_Nj8VJcAHPF-3gghGXvUYmEqJJqwZOAg--7qfsHk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});