import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDc1YTlmYzEzYTQ3MjZkOWU1NWJiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ5ODcyNiwiZXhwIjoxNjY2NjgyNzI2fQ.hqeW4s63FQoC_OKnuZDEqUfO4C_NcWfSDZiPs-2fOHY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
