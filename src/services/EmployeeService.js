import axios from "axios";

const EMPLOYEE_API_BASEURL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASEURL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASEURL, employee);
  }

  getEmployeebyId(employeeId) {
    return axios.get(EMPLOYEE_API_BASEURL + "/" + employeeId);
  }
  updateEmployeebyId(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASEURL + "/" + employeeId, employee);
  }
}

export default new EmployeeService();
