import { useReducer, useState } from "react";
import Cart from "./Cart";
import Menu from "./Menu";
import { cartReducer, initialState } from "../../cartReducer";
import SearchMenu from "./SearchMenu";

function Home() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <div className="flex justify-center my-5">
        <SearchMenu setSearchValue={setSearchValue}></SearchMenu>
      </div>

      <div className="flex gap-5">
        <Menu dispatch={dispatch} searchValue={searchValue} />
        <Cart dispatch={dispatch} carts={state.carts} />
      </div>
    </div>
  );
}
export default Home;
