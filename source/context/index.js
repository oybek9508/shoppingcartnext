import { useReducer, useContext, createContext, useEffect } from "react";
import { reducer } from "../components/reducers";
import { Actions } from "../components/reducers/actions";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  amount: 0,
  total: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("initialState", initialState);

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
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: Actions.TOTAL_AMOUNT });
  }, [state.cart]);

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

export { CartProvider, CartContext };
