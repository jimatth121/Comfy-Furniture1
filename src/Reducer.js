export const basketInitialState = { basket: [], viewItem:{} };

const basketReducer = (state, action) => {
  console.log("state basket", state, state.basket);
  //   const total = state.basket.reduce((each )=> each.price)
  if (action.type === "ADD_TO_BASKET") {
    const isExist = state.basket.find(
      (each) => each.title === action.payload.title
    );
    if (isExist) {
      return state;
    } else {
      return {
        ...state,
        // totalAmount: state.totalAmount + action.payload.price,
        // cartnumber: state.cartnumber + 1,
        basket: [...state.basket, action.payload],
      };
    }
  }

  if (action.type === "INCREMENT__QUANTITY") {
    console.log("state", state);
    const newBasket = state.basket.map((item) => {
      if (item.title === action.payload.title) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    // const oneitem = state.basket.find((item) => {
    //   if (item.title === action.payload.title) {
    //     return item;
    //   }
    // });

    // console.log("matttt", oneitem);
    console.log("payload", newBasket);
    return {
      ...state,
    //   cartnumber: state.cartnumber + 1,
      basket: newBasket,
    //   totalAmount: state.totalAmount + oneitem.price,
    };
  }
  if (action.type === "DECREMENT__QUANTITY") {
    console.log(state.basket);
    const newBasket2 = state.basket.map((item) => {
      if (item.title === action.payload.title){
        return { ...item, qty: item.qty - 1 };
      } else {
        return item;
      }
    });
   const newBasket3 = newBasket2.filter(each=> each.qty > 0)
    return { ...state, basket: newBasket3};
  }

  if(action.type === 'DELETE__ITEM'){
   const newState =  state.basket.filter(item=> item.title !== action.payload.title )

   return{...state, basket:newState}
  }

  if(action.type === 'VIEW__ITEM'){
    console.log(action.payload)
    return {
        ...state,
        viewItem:action.payload
    }
  }

  return state;
};

export default basketReducer;
