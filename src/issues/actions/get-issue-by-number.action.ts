import { githubApi } from "../../api/Github.api";
import { sleep } from "../../helpers";
import { GithubIssue } from "../interfaces";

export const getIssueByNumber = async (
  issueNumber: number
): Promise<GithubIssue> => {
  await sleep(1000);

  const { data } = await githubApi.get(`issues/${issueNumber}`);
  return data;
};
