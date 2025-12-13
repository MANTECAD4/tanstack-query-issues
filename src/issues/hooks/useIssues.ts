import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces";

type Props = {
  issuesFilter: State;
};
export const useIssues = ({ issuesFilter }: Props) => {
  const issuesQuery = useQuery({
    queryKey: ["issues", issuesFilter],
    queryFn: () => getIssues(issuesFilter),
    staleTime: 1000 * 60 * 60,
  });
  return { issuesQuery };
};
