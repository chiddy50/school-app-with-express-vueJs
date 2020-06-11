import http from "../http-common";

class GenderDataService {
  getAll() {
    return http.get("/gender");
  }
}

export default {
    GenderDataService: new GenderDataService()
}
