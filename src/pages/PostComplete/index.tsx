import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostCompleteContainer, PostHeader, PostInfo } from "./styles";
import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { dateFormatter } from "../../component/utils/formatter";
import { IssuesContext } from "../../context/IssueContextExport";

export function PostComplete() {
  const { idIssue } = useParams();
  const { issues } = useContext(IssuesContext);
  const navigate = useNavigate();

  let issueToDetail;

  if (issues) {
    issueToDetail = issues.find((issue) => issue.id === Number(idIssue));
  }

  return (
    <PostCompleteContainer>
      <PostInfo>
        <PostHeader>
          <a onClick={() => navigate(-1)} href="#">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            VOLTAR
          </a>
          <a href={issueToDetail?.link} target="_blank">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeader>
        <p>{issueToDetail ? issueToDetail.title : "Carregando"}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {issueToDetail ? issueToDetail.user : <p> Carregando </p>}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
            {issueToDetail
              ? dateFormatter(new Date(issueToDetail.createdAt))
              : "Carregando"}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {issueToDetail ? issueToDetail.comments : "Carregando"} Comentários
          </span>
        </div>
      </PostInfo>
    </PostCompleteContainer>
  );
}
