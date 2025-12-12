import { useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { FiSkipBack } from "react-icons/fi";
import { useIssueByNumber } from "../hooks/useIssueByNumber";

export const IssueView = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { issueQuery, commentsQuery } = useIssueByNumber(Number(id));

  return (
    <div className="mb-5">
      <div className="mb-4">
        <button
          onClick={() => navigate(-1)}
          className="hover:underline text-blue-400 flex items-center"
        >
          <FiSkipBack />
          Regresar
        </button>
      </div>
      <h2>
        {issueQuery.data?.title} - {issueQuery.data?.user.login}
      </h2>
      <div className="flex flex-wrap gap-x-1 gap-y-2">{}</div>
      {/* Primer comentario */}
      {issueQuery.data && (
        <IssueComment
          key={issueQuery.data?.id}
          body={issueQuery.data?.body}
          userName={issueQuery.data?.user.login}
          avatarUrl={issueQuery.data?.user.avatar_url}
        />
      )}
      {commentsQuery.isLoading ? (
        <span>Loading...</span>
      ) : (
        commentsQuery.data?.map((comment) => (
          <IssueComment
            key={comment.id}
            body={comment.body}
            userName={comment.user.login}
            avatarUrl={comment.user.avatar_url}
          />
        ))
      )}
    </div>
  );
};
