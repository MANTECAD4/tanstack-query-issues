import { useInfiniteQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces";

type Props = {
  issuesFilter: State;
  labelsFilter: string[];
};
export const useIssuesInfiniteScroll = ({
  issuesFilter,
  labelsFilter,
}: Props) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: [
      "issues",
      "infinite",
      { state: issuesFilter, labels: labelsFilter.join(",") },
    ],
    queryFn: ({ pageParam }) =>
      getIssues(issuesFilter, labelsFilter, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
    staleTime: 1000 * 60 * 60,
  });

  return {
    issuesQuery,
  };
};
