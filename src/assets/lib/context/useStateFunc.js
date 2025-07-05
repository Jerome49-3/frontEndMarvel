import { useContext } from "react";
import { StateContext } from "../../../context/StateProvider";

export const useStateFunc = () => {
  return useContext(StateContext);
};
