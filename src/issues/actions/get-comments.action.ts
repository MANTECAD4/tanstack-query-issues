import { githubApi } from "../../api/Github.api";
import { GithubComment } from "../interfaces/comment.interface";

export const getComments = async (num: number): Promise<GithubComment[]> => {
  const { data } = await githubApi.get<GithubComment[]>(
    `/issues/${num}/comments`
  );
  return data;
};
