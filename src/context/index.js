import { useReducer, useEffect, useContext, createContext } from "react";
import { Actions } from "../components/reducers/actions";
import { reducer } from "../components/reducers/index";

const CartContext = createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state);

  const addItem = (item) => {
    dispatch({ type: Actions.ADD_ITEM, payload: item });
  };

  const deleteItem = (item) => {
    dispatch({ type: Actions.DELETE_ITEM, payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: Actions.REMOVE_ITEM, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: Actions.CLEAR });
  };

  useEffect(() => {
    dispatch({ type: Actions.TOTAL_PRICE });
  }, state.cart);

  return (
    <CartContext.Provider
      value={{ ...state, addItem, deleteItem, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
