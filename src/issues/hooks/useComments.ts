import { useQuery } from "@tanstack/react-query";
import { getComments } from "../actions/get-comments.action";

export const useComments = (num: number) => {
  const commentsQuery = useQuery({
    queryKey: [`comments`, num],
    queryFn: () => getComments(num),
    staleTime: 1000 * 60 * 5,
  });
  return { commentsQuery };
};
