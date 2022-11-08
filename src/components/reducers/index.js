import { Actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedCartIndex < 0) {
        updatedCart.push(action.payload);
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        updatedItem.amount++;
        updatedCart[updatedCartIndex] = updatedItem;
      }

      return {
        ...state,
        cart: updatedCart,
      };
    case Actions.DELETE_ITEM:
      const updatedCartDel = [...state.cart];
      const updatedCartIndexDel = updatedCartDel.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItemDel = { ...updatedCartDel[updatedCartIndexDel] };
      updatedItemDel.amount--;
      if (updatedItemDel.amount <= 0) {
        updatedCartDel.splice(updatedCartIndexDel, 1);
      } else {
        updatedCartDel[updatedCartIndexDel] = updatedItemDel;
      }
      return {
        ...state,
        cart: updatedCartDel,
      };
    case Actions.REMOVE_ITEM:
      const updatedCartRem = [...state.cart];
      const updatedCartIndexRem = updatedCartRem.findIndex(
        (item) => item.id === action.payload.id
      );
      updatedCartRem.splice(updatedCartIndexRem, 1);
      return {
        ...state,
        cart: updatedCartRem,
      };
    case Actions.CLEAR:
      return {
        ...state,
        cart: [],
      };
    case Actions.TOTAL_PRICE:
      const totalPrice = state.cart
        .map((item) => item.price * item.amount)
        .reduce((prev, curr) => prev + curr, 0);
      return {
        ...state,
        total: totalPrice,
      };
  }
};
