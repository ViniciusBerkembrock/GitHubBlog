import { HeaderContainer } from "./styles";

import Logo from "../../../public/images/Logo.png";
import EffectRight from "../../../public/images/effectRight.png";
import EffectLeft from "../../../public/images/effectLeft.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={EffectLeft} alt="" />
      <img src={Logo} alt="" />
      <img src={EffectRight} alt="" />
    </HeaderContainer>
  );
}
