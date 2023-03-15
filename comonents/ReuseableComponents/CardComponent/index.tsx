import ClockIcon from "public/icons/clockSvg";
import * as React from "react";
import IconComponent from "../IconComponent";
import {
  Container,
  IconWrapper,
  TextWrapper,
  Wrapper,
} from "./styled.components";
interface IProps {
  number: number;
  title: string;
  icon: string;
  color: string;
}
const CardComponent = ({ number, title, icon, color }: IProps) => {
  return (
    <Container>
      <Wrapper color={color}>
        <TextWrapper color={color}>
          <span>{number}</span>
          <h4>{title}</h4>
        </TextWrapper>
        <IconWrapper>
          <IconComponent fill={color} width="60px" height="60px" icon={icon} />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};
export default CardComponent;
