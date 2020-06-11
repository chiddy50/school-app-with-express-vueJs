import http from "../http-common";

class ParentDataService {
  getAll() {
    return http.get("/parents");
  }

  get(id) {
    return http.get(`/parents/${id}`);
  }

  create(data) {
    return http.post("/parents", data);
  }

  update(id, data) {
    return http.put(`/parents/${id}`, data);
  }

  delete(id) {
    return http.delete(`/parents/${id}`);
  }

  deleteAll() {
    return http.delete(`/parents`);
  }

  findByName(name) {
    return http.get(`/parents?name=${name}`);
  }
}

export default new ParentDataService();