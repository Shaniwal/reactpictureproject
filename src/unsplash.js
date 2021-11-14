import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID JkeBDvb4O1ej2FDVqCLCh_YvjXt0Bkqf75fHkzEU5Fk",
  },
});
