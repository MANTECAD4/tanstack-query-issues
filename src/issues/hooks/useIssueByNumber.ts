import { useQuery } from "@tanstack/react-query";
import { getIssueByNumber } from "../actions/get-issue-by-number.action";

export const useIssueByNumber = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssueByNumber(issueNumber),
    staleTime: 1000 * 60 * 2,
  });
  return { issueQuery };
};
