import http from "../http-common";
class MicroserviceDataService {
    getAllUsers() {
        return http.get("/user");
      }
      getUser(id) {
        return http.get(`/user/${id}`);
      }
      getUserId(id) {
        return http.get(`/user/get/${id}`);
      }
      getUserHabits(id){
        return http.get(`/user/${id}/habits`);
      }


      createHabit(id,data) {
        return http.post(`/user/${id}/habits`, data);
      }

      update(id,habitid, data) {
        return http.put(`/user/${id}/habits/${habitid}`, data);
      }
}


export default new MicroserviceDataService();