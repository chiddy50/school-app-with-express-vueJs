import http from "../http-common";

class ClassDataService {
  getAll() {
    return http.get("/class");
  }

  get(id) {
    return http.get(`/class/${id}`);
  }

  create(data) {
    return http.post("/class", data);
  }

  update(id, data) {
    return http.put(`/class/${id}`, data);
  }

  delete(id) {
    return http.delete(`/class/${id}`);
  }

  deleteAll() {
    return http.delete(`/class`);
  }

  findByName(name) {
    return http.get(`/class?name=${name}`);
  }
}

class SectionDataService {
  getAll() {
    return http.get("/section");
  }

  get(id) {
    return http.get(`/section/${id}`);
  }

  create(data) {
    return http.post("/section", data);
  }

  update(id, data) {
    return http.put(`/section/${id}`, data);
  }

  delete(id) {
    return http.delete(`/section/${id}`);
  }

  deleteAll() {
    return http.delete(`/section`);
  }

  findByName(name) {
    return http.get(`/section?name=${name}`);
  }
}

class GroupDataService {
  getAll() {
    return http.get("/group");
  }

  get(id) {
    return http.get(`/group/${id}`);
  }

  create(data) {
    return http.post("/group", data);
  }

  update(id, data) {
    return http.put(`/group/${id}`, data);
  }

  delete(id) {
    return http.delete(`/group/${id}`);
  }

  deleteAll() {
    return http.delete(`/group`);
  }

  findByName(name) {
    return http.get(`/group?name=${name}`);
  }
}

export default {
  ClassDataService: new ClassDataService(),
  SectionDataService: new SectionDataService(),
  GroupDataService: new GroupDataService()
};