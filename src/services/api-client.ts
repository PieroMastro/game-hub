import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "af215bd1726c4fe7bc5064f4081e24c3",
  },
});
