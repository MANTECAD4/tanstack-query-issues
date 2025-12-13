import { githubApi } from "../../api/Github.api";
import { sleep } from "../../helpers";
import { GithubComment } from "../interfaces/comment.interface";

export const getComments = async (num: number): Promise<GithubComment[]> => {
  await sleep(1000);

  const { data } = await githubApi.get<GithubComment[]>(
    `/issues/${num}/comments`
  );
  return data;
};
