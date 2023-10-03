import { GET_CABINS, GET_USERS, GET_CABIN_DETAIL} from "./actions";
const initialState = {
  cabins: [],
  allCabins: [],
  cabinDetail: [],
  allUsers: [],
  users: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CABINS:
      return { ...state, cabins: action.payload, allCabins: action.payload };
    case GET_CABIN_DETAIL:
      return { ...state, cabinDetail: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload, allUsers: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
