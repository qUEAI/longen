import axios from "axios";
export function getIdcsList() {
  return axios.get("/api/idcs/")
}
export function getPaginationList(params) {
  return axios.get("/api/idcs/?page=${params.page}")
}
