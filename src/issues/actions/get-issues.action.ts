import { GithubIssue, State } from "../interfaces";
import { githubApi } from "../../api/Github.api";
import { sleep } from "../../helpers";

export const getIssues = async (
  issuesFIlter: State,
  labelsFilter: string[],
  pageNumber: number
): Promise<GithubIssue[]> => {
  await sleep(1000);

  const params = new URLSearchParams();
  if (issuesFIlter !== State.All) {
    params.append("state", issuesFIlter);
  }
  if (labelsFilter.length > 0) {
    params.append("labels", labelsFilter.join(","));
  }
  params.append("page", pageNumber.toString());
  params.append("per_page", "5");
  const { data } = await githubApi.get<GithubIssue[]>("/issues", {
    params,
  });
  // console.log(data);
  return data;
};
