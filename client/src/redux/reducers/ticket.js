import { ADD_TICKET, DELETE_TICKET, EDIT_TICKET, FAIL_TICKET, GET_TICKET, LOAD_TICKET } from '../actionType/ticket';

const intialeState = {
  ticket: {},
  tickets: [],
  load: false,
  errors: [],
};

const ticketReducer = (state = intialeState, { type, payload }) => {
  switch (type) {
    case LOAD_TICKET:
      return { ...state, load: true };
    case  ADD_TICKET:
      return { ...state, load: false, ticket: payload.ticket };
    case EDIT_TICKET:
      return { ...state, load: false, ticket: payload.ticket };
    case DELETE_TICKET:
      return { ...state, load: false, ticket: payload.ticket };
    case GET_TICKET:
      return { ...state, load: false, tickets: payload.tickets };
    case  FAIL_TICKET:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default ticketReducer;