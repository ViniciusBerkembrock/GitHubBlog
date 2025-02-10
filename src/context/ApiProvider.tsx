import { ReactNode, useCallback, useEffect, useState } from "react";
import { octokit } from "../lib/octokit";

import axios from "axios";
import { ApiContext } from "./ApiContext";

interface ApiProviderProps {
  children: ReactNode;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: "open" | "closed";
  created_at: string;
  updated_at: string;
  html_url: string;
  labels: {
    id: number;
    name: string;
    color: string;
  }[];
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  comments: number;
  reactions: {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  repository_url: string;
}

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function ApiProvider({ children }: ApiProviderProps) {
  const [issues, setIssues] = useState<GitHubIssue[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getIssues() {
    try {
      const response = await octokit.rest.issues.listForRepo({
        owner: "ViniciusBerkembrock",
        repo: "GitHubBlog",
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
      return [];
    }
  }

  const getIssuesWithAxios = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.github.com/repos/ViniciusBerkembrock/GitHubBlog/issues",
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      setIssues(response.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
      setIsLoading(false);
      return [];
    }
  }, []);

  useEffect(() => {
    getIssuesWithAxios();
  }, [getIssuesWithAxios]);

  const searchIssueWithOctokit = useCallback(async (param: string) => {
    setIsLoading(true);
    const searchResult = await octokit.rest.search.issuesAndPullRequests({
      q: `${param} repo:ViniciusBerkembrock/GitHubBlog is:issue `,
    });

    setIssues(searchResult.data.items);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsLoading(false);
  }, []);

  return (
    <ApiContext.Provider
      value={{
        getIssues,
        getIssuesWithAxios,
        issues,
        isLoading,
        searchIssueWithOctokit,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
