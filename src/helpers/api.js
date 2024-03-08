import axios from "axios";
import { LANGUAGE_VERSIONS } from "./const";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const API_COURSES = "http://34.42.8.109/api/v1";

export const executeCode = async (language, sourceCode) => {
  const res = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return res.data;
};
