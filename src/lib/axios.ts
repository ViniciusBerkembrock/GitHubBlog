import axios from "axios";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const api = axios.create({
  baseURL: "https://api.github.com/repos/",
  headers: {
    // Authorization: `TOKEN ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});
