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
import { ApiContext } from "../../context/ApiContext";
import { dateFormatter } from "../../component/utils/formatter";

export function PostComplete() {
  const { idIssue } = useParams();
  const { issues } = useContext(ApiContext);
  const navigate = useNavigate();

  let issueToDetail;

  if (issues) {
    issueToDetail = issues.find((issue) => issue.id === Number(idIssue));
    console.log(issueToDetail);
  }

  return (
    <PostCompleteContainer>
      <PostInfo>
        <PostHeader>
          <a onClick={() => navigate(-1)} href="#">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            VOLTAR
          </a>
          <a href={issueToDetail?.html_url} target="_blank">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeader>
        <p>{issueToDetail ? issueToDetail.title : "Carregando"}</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            {issueToDetail ? issueToDetail.user.login : <p> Carregando </p>}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
            {issueToDetail
              ? dateFormatter(new Date(issueToDetail.updated_at))
              : "Carregando"}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {issueToDetail ? issueToDetail.comments : "Carregando"}
          </span>
        </div>
      </PostInfo>
    </PostCompleteContainer>
  );
}
