import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces";
import { useEffect, useState } from "react";

type Props = {
  issuesFilter: State;
  labelsFilter: string[];
};
export const useIssues = ({ issuesFilter, labelsFilter }: Props) => {
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(1);
  }, [issuesFilter]);

  useEffect(() => {
    setPageNumber(1);
  }, [labelsFilter]);

  const issuesQuery = useQuery({
    queryKey: [
      "issues",
      { state: issuesFilter, labels: labelsFilter.join(","), page: pageNumber },
    ],
    queryFn: () => getIssues(issuesFilter, labelsFilter, pageNumber),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
  });
  const handleIncreasePageNumber = () => {
    if (issuesQuery.data?.length === 0) {
      return;
    }
    setPageNumber((prev) => prev + 1);
  };
  const handleDecreasePageNumber = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber((prev) => prev - 1);
  };
  return {
    issuesQuery,
    pageNumber,
    handleIncreasePageNumber,
    handleDecreasePageNumber,
  };
};
