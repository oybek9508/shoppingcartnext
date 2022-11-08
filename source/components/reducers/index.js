import { Actions } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("updatedCartIndex", updatedCartIndex);
      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payload });
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        console.log("updatedItem", updatedItem);
        updatedItem.amount++;
        updatedCart[updatedCartIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
      };
    case Actions.DELETE_ITEM:
      const deletedCart = [...state.cart];
      const deletedCartIndex = deletedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const deletedItem = { ...deletedCart[deletedCartIndex] };
      deletedItem.amount--;
      if (deletedItem.amount <= 0) {
        deletedCart.splice(deletedCartIndex, 1);
      } else {
        deletedCart[deletedCartIndex] = deletedItem;
      }
      return {
        ...state,
        cart: deletedCart,
      };

    case Actions.REMOVE_ITEM:
      const removedCart = [...state.cart];
      const removedCartIndex = removedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      removedCart.splice(removedCartIndex, 1);

      return {
        ...state,
        cart: removedCart,
      };
    case Actions.CLEAR:
      return {
        ...state,
        cart: [],
      };
    case Actions.TOTAL_PRICE:
      const initialValue = 0;
      const totalPrice = state.cart
        .map((item) => {
          return item.price * item.amount;
        })
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          initialValue
        );
      return {
        ...state,
        total: totalPrice,
      };

    case Actions.TOTAL_AMOUNT:
      let totalAmount = state.cart
        .map((item) => {
          return item.amount;
        })
        .reduce((prev, curr) => prev + curr, 0);
      return { ...state, amount: totalAmount };
  }
};
