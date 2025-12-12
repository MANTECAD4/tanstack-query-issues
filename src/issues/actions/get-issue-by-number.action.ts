import { githubApi } from "../../api/Github.api";
import { GithubIssue } from "../interfaces";

export const getIssueByNumber = async (
  issueNumber: number
): Promise<GithubIssue> => {
  const { data } = await githubApi.get(`issues/${issueNumber}`);
  return data;
};
