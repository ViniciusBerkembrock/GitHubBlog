import { useContext, useEffect } from "react";
import { Profile } from "../../component/profile";
import { SearchBar } from "../../component/searchBar";
import { PostContainer, Post, Spinner, SpinnerWrapper } from "./styles";
import { dateFormatter } from "../../component/utils/formatter";
import { ApiContext } from "../../context/ApiContext";

export function Home() {
  const { getIssues, issues, isLoading } = useContext(ApiContext);

  useEffect(() => {
    getIssues();
  });

  return (
    <>
      <Profile />
      <SearchBar />

      <PostContainer>
        {isLoading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          issues?.map((issue) => {
            return (
              <Post key={issue.id}>
                <div>
                  <strong>{issue.title}</strong>
                  <span>{dateFormatter(new Date(issue.updated_at))}</span>
                </div>
                <p>{issue.body}</p>
              </Post>
            );
          })
        )}
      </PostContainer>
    </>
  );
}
