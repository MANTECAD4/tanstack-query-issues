import { FC } from "react";
import { GithubIssue, State } from "../interfaces";
import { IssueItem } from "./IssueItem";

type Props = {
  issues: GithubIssue[];
  onChangeIssuesFilter: (state: State) => void;
  issuesFilter: State;
};
export const IssueList: FC<Props> = ({
  issues,
  onChangeIssuesFilter: setIssuesFilter,
  issuesFilter,
}) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => setIssuesFilter(State.All)}
          className={`btn ${issuesFilter === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setIssuesFilter(State.Open)}
          className={`btn ${issuesFilter === "open" ? "active" : ""}`}
        >
          Open
        </button>
        <button
          onClick={() => setIssuesFilter(State.Close)}
          className={`btn ${issuesFilter === "closed" ? "active" : ""}`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} {...issue} />
        ))}
      </div>
    </>
  );
};
