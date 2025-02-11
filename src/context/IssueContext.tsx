import { ReactNode, useCallback, useEffect, useState } from "react";
import { octokit } from "../lib/octokit";
import { api } from "../lib/axios";
import { IssuesContext } from "./IssueContextExport";

export interface Issue {
  id: number;
  body: string | null | undefined;
  link: string;
  title: string;
  user: string;
  avatar: string | undefined;
  createdAt: string;
}

interface IssueProviderProps {
  children: ReactNode;
}

interface MinimalGitHubIssue {
  id: number;
  body: string | null;
  html_url: string;
  title: string;
  createdAt: string;
  user?: {
    login: string;
    avatar_url: string;
  };
}

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setNewIssues] = useState<Issue[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchIssuesOctokit() {
    setIsLoading(true);
    try {
      const response = await octokit.rest.issues.listForRepo({
        owner: "ViniciusBerkembrock",
        repo: "GitHubBlog",
      });

      const fetchedIssues = response.data.map((issue) => ({
        id: Number(issue.id),
        body: issue.body,
        link: issue.html_url,
        title: issue.title,
        user: issue.user?.login || "Not Found",
        avatar: issue.user?.avatar_url,
        createdAt: issue.created_at,
      }));

      setNewIssues(fetchedIssues);
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchIssuesOctokit();
  }, []);

  const getIssuesWithAxios = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await api.get<MinimalGitHubIssue[]>(
        "ViniciusBerkembrock/GitHubBlog/issues"
      );

      const fetchedIssues: Issue[] = response.data.map((issue) => ({
        id: Number(issue.id),
        body: issue.body,
        link: issue.html_url,
        title: issue.title,
        user: issue.user?.login || "Not Found",
        avatar: issue.user?.avatar_url,
        createdAt: issue.createdAt,
      }));

      setNewIssues(fetchedIssues);
      console.log(issues);
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
      return [];
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getIssuesWithAxios();
  }, [getIssuesWithAxios]);

  const SearchIssuesWithAxios = useCallback(
    async (query?: string) => {
      setIsLoading(true);
      if (query) {
        try {
          const response = await api.get(
            `https://api.github.com/search/issues?q=${query}%20repo:ViniciusBerkembrock/GitHubBlog`
          );

          const fetchedIssues: Issue[] = response.data.items.map(
            (issue: MinimalGitHubIssue) => ({
              id: Number(issue.id),
              body: issue.body,
              link: issue.html_url,
              title: issue.title,
              user: issue.user?.login || "Not Found",
              avatar: issue.user?.avatar_url,
              createdAt: issue.createdAt,
            })
          );

          setFilteredIssues(fetchedIssues);
        } catch (error) {
          console.error("Erro ao buscar issues:", error);
        }
      } else {
        setFilteredIssues([]);
        // getIssuesWithAxios();
      }
      setIsLoading(false);
    },
    [getIssuesWithAxios]
  );

  return (
    <IssuesContext.Provider
      value={{ issues, SearchIssuesWithAxios, filteredIssues, isLoading }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
