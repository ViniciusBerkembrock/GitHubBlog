import { createContext } from "react";
import { Issue } from "./IssueContext";

interface IssuesContextType {
  issues: Issue[];
  filteredIssues: Issue[];
  isLoading: boolean;
  SearchIssuesWithAxios: (query?: string) => Promise<void>;
}

export const IssuesContext = createContext<IssuesContextType>(
  {} as IssuesContextType
);
