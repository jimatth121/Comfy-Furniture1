import { useContext, useReducer, createContext } from "react";
import reducer, { basketInitialState } from "./Reducer";

// THIS IS DATA LAYER
const BasketContext = createContext();
// BUILD A PROVIDER
export const StateProvider = ({ children }) => {
  const value = useReducer(reducer, basketInitialState);

  //   console.log("contenx value ------- ", value);
  const totalCount = value[0].basket.length
    ? value[0].basket?.reduce(
        (acumulator, currentValue) => acumulator + currentValue.qty,
        0
      )
    : 0;
  return (
    <BasketContext.Provider value={[...value, totalCount]}>
      {children}
    </BasketContext.Provider>
  );
};

// THIS IS HOW I WILL USE IT INSIDE OF A COMPONENT

export const useStateValue = () => useContext(BasketContext);
