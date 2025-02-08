import { useState, FocusEvent } from "react";
import { SearchBarContainer, SearchBarForm } from "./styles";

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    console.log(event);
  }

  function handleOnBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    console.log(event);
  }

  return (
    <SearchBarContainer>
      <div>
        <span>Pubilicações</span>
        <span>6 publicações</span>
      </div>

      <SearchBarForm action="">
        <label data-state={isFocused ? "onFocus" : "onBlur"}>
          <input
            id="content"
            type="text"
            placeholder="Buscar conteúdo"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
        </label>
      </SearchBarForm>
    </SearchBarContainer>
  );
}
