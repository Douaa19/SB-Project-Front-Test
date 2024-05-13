import axios from "axios";
import { BACK_URL } from "../config";

// get best selling products
export const getCategories = async () => {
  const result = await axios.get(`${BACK_URL}get-categories`);
  return result.data;
};
