import { useQuery } from "@tanstack/react-query";
import { getIssueByNumber } from "../actions/get-issue-by-number.action";
import { getComments } from "../actions/get-comments.action";

export const useIssueByNumber = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssueByNumber(issueNumber),
    staleTime: 1000 * 60 * 2,
  });
  const commentsQuery = useQuery({
    queryKey: [`issues`, issueQuery.data?.number, "comments"],
    queryFn: () => getComments(issueQuery.data!.number),
    staleTime: 1000 * 60 * 5,
    enabled: issueQuery.data !== undefined,
  });
  return { issueQuery, commentsQuery };
};
