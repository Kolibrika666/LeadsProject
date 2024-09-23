import axios from "axios";
export const httpClient = axios.create({
  headers: {
    "Content-type": "application/hal+json",
  },
  withCredentials: false,
});

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFmNzkxZmQxODJjYmQ3NzE3YzY3MWFhYzY0MWIxZDU2NTIyMjU3NzdmMTg5NDJiOTA3NGJlMTU1YjI5ODM2NDlmYTQ5OGNiMjk0Y2VkNDkwIn0.eyJhdWQiOiJiZTUwMTkxMi1mOTM5LTRlMGQtOWZjZC1kNzYzNmZkN2QyMGYiLCJqdGkiOiIxZjc5MWZkMTgyY2JkNzcxN2M2NzFhYWM2NDFiMWQ1NjUyMjI1Nzc3ZjE4OTQyYjkwNzRiZTE1NWIyOTgzNjQ5ZmE0OThjYjI5NGNlZDQ5MCIsImlhdCI6MTcyNjQ1Njc4NywibmJmIjoxNzI2NDU2Nzg3LCJleHAiOjE3NTM5MjAwMDAsInN1YiI6IjExNTIzODg2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTUzMTk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiNmZkNDE1YmItYzA2OC00NThjLWI3NDAtZDY1YTdmNzM2OTk0IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.ftCm0Knge73uziMVKhLNIkFsvooAJS34mkCKxdIndZ_KJRjMELTovNlvj_GmqZ4p7NRfDfAKgFCxyzREGRFGLH5cGA9NMFDkox29gpX8X2yGO90_58mBfmY7tlCT1FV5UBsskzMe6bxkcgk258cB9JHuUw1mUr5JzYTZjyd9D6goTBuIgfj8Z7UCBzZmHGUiL3qF0a9W2BLiPwok6BXTwWzmgifqyIInBq65jFM7mGcyRRMMadX5DmWVuu5hkJadHan2OdDNbw-i12hRW0zmzgHrlG2BI_DyG58xmQ5yCjdQwyB63d7SCTOgxlA31_Js4PSxA2ygvXHgQMlm_P-pJw";
  return config;
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;
    const message = error?.response?.data;
    if (status === 401) {
      console.log("401", message);
    } else if (status === 404) {
      console.log("404", message);
    } else {
      console.log(error?.response?.data);
    }
    return Promise.reject(error);
  }
);
