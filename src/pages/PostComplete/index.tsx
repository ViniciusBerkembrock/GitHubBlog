import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostCompleteContainer, PostHeader, PostInfo } from "./styles";
import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostComplete() {
  return (
    <PostCompleteContainer>
      <PostInfo>
        <PostHeader>
          <a>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            VOLTAR
          </a>
          <a>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </PostHeader>
        <p>JavaScrpt data types and data strucuidsad</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            Nome do Usuário
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 Comentários
          </span>
        </div>
      </PostInfo>
    </PostCompleteContainer>
  );
}
