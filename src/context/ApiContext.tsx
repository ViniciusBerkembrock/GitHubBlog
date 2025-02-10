import { createContext } from "react";
import { GitHubIssue } from "./ApiProvider";

export interface CreateContextType {
  getIssues: () => void;
  getIssuesWithAxios: () => void;
  issues: GitHubIssue[] | undefined;
  isLoading: boolean;
  searchIssueWithOctokit: (param: string) => void;
}
export const ApiContext = createContext({} as CreateContextType);
