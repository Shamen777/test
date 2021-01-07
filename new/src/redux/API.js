import Axios from "axios";


const http = Axios.create({
    baseURL: "https://testbykhan.herokuapp.com/",
    headers: {
      Accept: "application/json",
    //   "Content-Type": "application/json",
    //   "Accept-Language": "en",
    },
  });

export default {
    category: () => http.get("/categories/"),
    categoryId: (id) => http.get(`/categories/${id}`)
}