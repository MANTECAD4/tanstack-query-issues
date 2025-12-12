import { GithubIssue } from "../interfaces";
import { githubApi } from "../../api/Github.api";

export const getIssues = async (): Promise<GithubIssue[]> => {
  const { data } = await githubApi.get<GithubIssue[]>("/issues");
  // console.log(data);
  return data;
};
