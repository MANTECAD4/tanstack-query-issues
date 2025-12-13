import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces";

type Props = {
  issuesFilter: State;
  labelsFilter: string[];
};
export const useIssues = ({ issuesFilter, labelsFilter }: Props) => {
  const issuesQuery = useQuery({
    queryKey: [
      "issues",
      { state: issuesFilter, labels: labelsFilter.join(",") },
    ],
    queryFn: () => getIssues(issuesFilter, labelsFilter),
    staleTime: 1000 * 60 * 60,
  });
  return { issuesQuery };
};
