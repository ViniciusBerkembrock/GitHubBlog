import { useState, useContext } from "react";
import { SearchBarContainer, SearchBarForm } from "./styles";
import { useForm } from "react-hook-form";

import * as zod from "zod";
// import { ApiContext } from "../../context/ApiContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssuesContext } from "../../context/IssueContextExport";

const searchFormSchema = zod.object({ query: zod.string() });

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  // const { searchIssueWithOctokit } = useContext(ApiContext);
  const { SearchIssuesWithAxios } = useContext(IssuesContext);
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  async function handleSearchIssue(data: SearchFormInputs) {
    await SearchIssuesWithAxios(data.query);
  }

  return (
    <SearchBarContainer>
      <div>
        <span>Pubilicações</span>
        <span>6 publicações</span>
      </div>

      <SearchBarForm id="pesquisa" onSubmit={handleSubmit(handleSearchIssue)}>
        <label data-state={isFocused ? "onFocus" : "onBlur"}>
          <input
            id="content"
            type="text"
            placeholder="Buscar conteúdo"
            onFocus={handleOnFocus}
            {...register("query")}
            onBlur={handleOnBlur}
          />
        </label>
        <button type="submit" form="pesquisa">
          PROCURAR
        </button>
      </SearchBarForm>
    </SearchBarContainer>
  );
}
