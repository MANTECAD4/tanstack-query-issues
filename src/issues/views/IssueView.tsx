import { useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import { FiSkipBack } from "react-icons/fi";
import { useComments } from "../hooks/useComments";
import { useIssueByNumber } from "../hooks/useIssueByNumber";

export const IssueView = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { issueQuery } = useIssueByNumber(Number(id));
  const { commentsQuery } = useComments(Number(id));

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
      {/* Primer comentario */}
      {commentsQuery.isLoading ? (
        <span>Loading...</span>
      ) : commentsQuery.data && commentsQuery.data.length > 0 ? (
        commentsQuery.data.map((comment) => (
          <IssueComment
            key={comment.id}
            body={comment.body}
            userName={comment.user.login}
            avatarUrl={comment.user.avatar_url}
          />
        ))
      ) : (
        <span>No comments yet</span>
      )}
    </div>
  );
};
