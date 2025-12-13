import { FiCheck, FiInfo, FiMessageSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { GithubIssue, State } from "../interfaces";
import { useQueryClient } from "@tanstack/react-query";
import { getComments } from "../actions/get-comments.action";

export const IssueItem = (issue: GithubIssue) => {
  const navigate = useNavigate();
  const queryCLient = useQueryClient();

  const prefetchIssue = () => {
    queryCLient.setQueryData(["issues", issue.number], issue, {
      updatedAt: Date.now() + 1000 * 60,
    });
    // queryCLient.prefetchQuery({
    //   queryKey: ["issues", issue.number],
    //   queryFn: () => getIssueByNumber(issue.number),
    //   staleTime: 1000 * 60 * 2,
    // });
  };

  const openIssue = () => {
    navigate(`/issues/issue/${issue.number}`);
    queryCLient.prefetchQuery({
      queryKey: ["issues", issue.number, "comments"],
      queryFn: () => getComments(issue.number),
      staleTime: 1000 * 60 * 2,
    });
  };

  return (
    <div
      onMouseEnter={prefetchIssue}
      className="animate-fadeIn flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800"
    >
      {issue.state === State.Close ? (
        <FiCheck size={30} color="green" className="min-w-10" />
      ) : (
        <FiInfo size={30} color="red" className="min-w-10" />
      )}

      <div className="flex flex-col flex-grow px-2">
        <div className="flex flex-wrap gap-x-1 gap-y-2">
          {issue.labels.map((label) => (
            <span
              className="rounded-full px-2 py-1 text-xs font-semibold"
              style={{ border: `1px solid #${label.color}` }}
            >
              {label.name}
            </span>
          ))}
        </div>
        <a onClick={openIssue} className="hover:underline cursor-pointer">
          {issue.title}
        </a>
        <span className="text-gray-500">
          #{issue.number} opened 2 days ago by{" "}
          <span className="font-bold">{issue.user.login}</span>
        </span>
      </div>

      <img
        src={issue.user.avatar_url}
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issue.comments}</span>
      </div>
    </div>
  );
};
