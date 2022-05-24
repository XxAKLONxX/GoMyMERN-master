import axios from "axios";
import {
  FAILEMP,
  GET_EMP,
  GET_ONE_EMP,
  LOADEMP,
  LOG_OUT,
  SIGN_IN_EMPLOYEE,
  SIGN_UP_EMPLOYEE,
} from "../actionType/employee";

export const signupEmp = (newEmployee) => async (dispatch) => {
  dispatch({ type: LOADEMP });
  try {
    let result = await axios.post("/api/employee/signupEmp", newEmployee);
    dispatch({
      type: SIGN_UP_EMPLOYEE,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAILEMP,
      payload: error.response.data.errors,
    });
  }
};

export const signinEmp = (employee) => async (dispatch) => {
  dispatch({ type: LOADEMP });
  try {
    let result = await axios.post("/api/employee/signinEmp", employee);
    dispatch({
      type: SIGN_IN_EMPLOYEE,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAILEMP,
      payload: error.response.data.errors,
    });
  }
};
export const logOutEmp = () => {
  return { type: LOG_OUT };
};
export const getemployee = () => async (dispatch) => {
  dispatch({ type: LOADEMP });
  try {
    let result = await axios.get("/api/employee/EmployeesList");
    dispatch({
      type: GET_EMP,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAILEMP,
      payload: error.response.data.errors,
    });
  }
};
export const getoneemployee = (employee) => (dispatch) => {
  dispatch({ type: LOADEMP });
  try {
    let result =  axios.get(`/api/employee/EmployeesProfile/${employee._id}`);
    dispatch({
      type: GET_ONE_EMP,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: FAILEMP,
      payload: error.response.data.errors,
    });
  }
}
