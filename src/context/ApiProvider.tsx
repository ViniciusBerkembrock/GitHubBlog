import { ReactNode, useCallback, useEffect, useState } from "react";
import { octokit } from "../lib/octokit";

import axios from "axios";
import { ApiContext } from "./ApiContext";

export type GitHubIssue = {
  id: number;
  node_id: string;
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  number: number;
  state: "open" | "closed";
  title: string;
  body: string | null;
  user: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
    type: string;
  };
  labels: {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: string | null;
  }[];
  assignee: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
    type: string;
  } | null;
  assignees: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    html_url: string;
    type: string;
  }[];
  milestone: {
    url: string;
    html_url: string;
    labels_url: string;
    id: number;
    node_id: string;
    title: string;
    description: string | null;
    state: "open" | "closed";
    open_issues: number;
    closed_issues: number;
  } | null;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
};

interface ApiProviderProps {
  children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
  const [issues, setIssues] = useState([]);
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
            Authorization: `token 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`,
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

  return (
    <ApiContext.Provider
      value={{ getIssues, getIssuesWithAxios, issues, isLoading }}
    >
      {children}
    </ApiContext.Provider>
  );
}
