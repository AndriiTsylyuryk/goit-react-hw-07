import axios from "axios";
import { fetchData, setErrorStatus } from "./contactsSlice";

axios.defaults.baseURL = "https://66b321e47fba54a5b7eb8c44.mockapi.io/";

export const fetchTodosThunk = () => async (dispatch) => {
  try {
    const response = await axios.get("todos");
    console.log(response.data);
    dispatch(fetchData(response.data));
  } catch (error) {
    dispatch(setErrorStatus(true));
  }
};
