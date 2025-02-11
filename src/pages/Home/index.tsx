import { useContext, useEffect } from "react";
import { Profile } from "../../component/profile";
import { SearchBar } from "../../component/searchBar";
import { PostContainer, Post, Spinner, SpinnerWrapper } from "./styles";
import { ApiContext } from "../../context/ApiContext";
import { useNavigate } from "react-router-dom";
import { IssuesContext } from "../../context/IssueContextExport";

export function Home() {
  const { getIssues } = useContext(ApiContext);
  const { issues, filteredIssues, isLoading } = useContext(IssuesContext);

  const navigate = useNavigate();

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
        ) : filteredIssues.length > 0 ? (
          filteredIssues?.map((issue) => {
            return (
              <Post
                key={issue.id}
                onClick={() => navigate(`/issue/${issue.id}/details`)}
              >
                <div>
                  <strong>{issue.title}</strong>
                  <span>
                    xxxx
                    {/* {dateFormatter(new Date(issue.createdAt))} */}
                  </span>
                </div>
                <p>{issue.body}</p>
              </Post>
            );
          })
        ) : (
          issues?.map((issue) => {
            return (
              <Post
                key={issue.id}
                onClick={() => navigate(`/issue/${issue.id}/details`)}
              >
                <div>
                  <strong>{issue.title}</strong>
                  <span>
                    xxxx
                    {/* {dateFormatter(new Date(issue.createdAt))} */}
                  </span>
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
