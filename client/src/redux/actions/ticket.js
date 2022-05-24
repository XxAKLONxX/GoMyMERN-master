import axios from 'axios';
import { ADD_TICKET, DELETE_TICKET, EDIT_TICKET, FAIL_TICKET, GET_TICKET, LOAD_TICKET } from '../actionType/ticket';


export const addTicket = (newTicket) => async (dispatch) => {
    dispatch({ type: LOAD_TICKET });
    try {
      let result = await axios.post("/api/ticket/ClientTicket", newTicket);
      dispatch({
        type: ADD_TICKET,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_TICKET,
        payload: error.response.data.errors,
      });
    }
  };
  export const editTicket = (Ticket) => async (dispatch) => {
    dispatch({ type: LOAD_TICKET });
    try {
      let result = await axios.patch(
        `/api/ticket/editTicket/${Ticket._id}`,
        Ticket
      );
      dispatch({
        type: EDIT_TICKET,
        payload: result.data,
      });
      dispatch(getTicket());
    } catch (error) {
      dispatch({
        type: FAIL_TICKET,
        payload: error.response.data.errors,
      });
    }
  };
  export const getTicket = () => async (dispatch) => {
    dispatch({ type: LOAD_TICKET });
    try {
      let result = await axios.get("/api/ticket/TicketList");
      dispatch({
        type: GET_TICKET,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: FAIL_TICKET,
        payload: error.response.data.errors,
      });
    }
  };
  export const deleteTicket = (Ticket) => async (dispatch) => {
    dispatch({ type: LOAD_TICKET });
    try {
      let result = await axios.delete(
        `/api/ticket/deleteTicket/${Ticket._id}`,
        Ticket
      );
  
      dispatch({
        type: DELETE_TICKET,
        payload: result.data,
      });
      dispatch(getTicket());
    } catch (error) {
      dispatch({
        type: FAIL_TICKET,
        payload: error.response.data.errors,
      });
    }
  };
