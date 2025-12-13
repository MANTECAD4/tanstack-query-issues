import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { GithubIssue, State } from "../interfaces";

export const ListView = () => {
  const [issuesFilter, setIssuesFilter] = useState<State>(State.All);
  const { issuesQuery } = useIssues({ issuesFilter });
  const issues: GithubIssue[] = issuesQuery.data ?? [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-x-8">
      {/* Ignora este elemento de abajo */}
      <div className="sm:col-span-2">
        <IssueList
          issues={issues}
          issuesFilter={issuesFilter}
          onChangeIssuesFilter={setIssuesFilter}
        />
      </div>
      {/* Ignora este elemento*/}

      {/* PROBLEMA */}
      {/* Aqui lo quiero */}
      <div className="px-2 flex flex-wrap items-start gap-x-1 gap-y-2 content-start">
        <LabelPicker />
      </div>
    </div>
  );
};
