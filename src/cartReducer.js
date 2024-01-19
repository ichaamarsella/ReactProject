//di js kita ga ngereturn komponen UI, kalo jsx kita return komponen UI (tampilan)
//komponen UI kaya HTML nya cuman tampilan, jadi kalo di jsx ada fungsi tapi ga ditampilin

export const initialState = {
  carts: [],
};
//diberi export untuk bisa dipanggil reducer
export function cartReducer(state, action) {
  switch (action.type) {
    case "add_to_cart": {
      const updatedCarts = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          return {
            ...cart,
            quantity: cart.quantity + 1,
            totalPrice: cart.price * (cart.quantity + 1),
          };
        }
        return cart;
      });

      if (state.carts.find((cart) => cart.id === action.payload.id))
        return {
          ...state,
          carts: updatedCarts,
        };

      return {
        ...state, // ... namanya spread
        carts: [
          ...state.carts,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: action.payload.price * action.payload.quantity,
          },
        ],
      };
    }
    case "increase_quantity": {
      const updatedCarts = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          const newQuantity = cart.quantity + 1;
          return {
            ...cart,
            quantity: newQuantity,
            totalPrice: cart.price * newQuantity,
          };
        }
        return cart;
      });

      return {
        ...state,
        carts: updatedCarts,
      };
    }
    case "decrease_quantity": {
      const updatedCarts = state.carts.map((cart) => {
        if (cart.id === action.payload.id) {
          const newQuantity = cart.quantity - 1;
          return {
            ...cart,
            quantity: newQuantity,
            totalPrice: cart.price * newQuantity,
          };
        }
        return cart;
      });

      return {
        ...state,
        carts: updatedCarts,
      };
    }

    case "delete_cart_item": {
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.itemId),
      };
    }
    case "checkout_item": {
      return {
        ...state,
        carts: [],
      };
    }

    default:
      throw Error("Unknown action: " + action.type);
  }
}
