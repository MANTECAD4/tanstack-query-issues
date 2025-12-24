import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { GithubIssue, State } from "../interfaces";
import { useIssuesInfiniteScroll } from "../hooks";

export const ListViewInfiniteScroll = () => {
  const [issuesFilter, setIssuesFilter] = useState<State>(State.All);
  const [labelsFilter, setLabelsFilter] = useState<string[]>([]);

  const { issuesQuery } = useIssuesInfiniteScroll({
    issuesFilter,
    labelsFilter,
  });

  const issues: GithubIssue[] = issuesQuery.data?.pages.flat() ?? [];

  const handleLabelsFilterChange = (label: string) => {
    if (labelsFilter.includes(label)) {
      return setLabelsFilter((prev) => [...prev.filter((l) => l !== label)]);
    }
    return setLabelsFilter((prev) => [...prev, label]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-x-8">
      <div className="sm:col-span-2">
        <IssueList
          issues={issues}
          issuesFilter={issuesFilter}
          onChangeIssuesFilter={setIssuesFilter}
        />
        <div className="flex gap-x-5 justify-center items-center">
          <button
            className="hover:underline cursor-pointer"
            // style={{}}
            onClick={() => {
              console.log("ola");
              issuesQuery.fetchNextPage();
            }}
          >
            Show More...
          </button>
        </div>
      </div>

      <div className="px-2 flex flex-wrap items-start gap-x-1 gap-y-2 content-start">
        <hr
          className="w-full my-3 opacity-40"
          // style={{ border: "1px solid rgba(3,3,3,0.5)" }}
        />
        <LabelPicker
          onLabelsFilterChange={handleLabelsFilterChange}
          selectedLabels={labelsFilter}
        />
      </div>
    </div>
  );
};
