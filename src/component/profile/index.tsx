import {
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileUserInformation,
  ProfileMain,
} from "./styles";

import Avatar from "/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img src={Avatar} alt="Profile Image" />
      </div>
      <ProfileMain>
        <ProfileHeader>
          <strong>Cameron Williamson</strong>
          <a href="https://fontawesome.com/icons/arrow-up-right-from-square?f=classic&s=solid">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>
        <ProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </ProfileDescription>
        <ProfileUserInformation>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} size="lg" />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </ProfileUserInformation>
      </ProfileMain>
    </ProfileContainer>
  );
}
