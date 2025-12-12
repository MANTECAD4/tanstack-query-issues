import { githubApi } from "../../api/Github.api";
import { sleep } from "../../helpers";
import { GithubLabel } from "../interfaces/";

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(2000);
  const { data } = await githubApi.get<GithubLabel[]>("/labels");
  // console.log(data);
  return data;
};
