import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDown from "public/icons/arrowDownSvg";
import BookingSvg from "public/icons/bookingSvg";
import DashboardSvg from "public/icons/dashboard";
import ScheduleSvg from "public/icons/scheduleSvg";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  Container,
  IconWrapper,
  Langwrapper,
  List,
  ListItems,
  LogoContainer,
} from "./styled.components";

const SideNavBar = () => {
  const { translations, colors } = useTheme();
  const [width, setWidth] = React.useState(false);

  const handleWidth = () => {
    setWidth(!width);
  };
  return (
    <Container className={width ? "active" : "In-active"}>
      <LogoContainer>
        <Link href={"/"}>
          <img
            src="/images/zadiplogo.png"
            alt="logo"
            width={150}
            height={"100%"}
          />
        </Link>
      </LogoContainer>
      <List className={width ? "active" : "In-active"}>
        <Link href="/" className={width ? "active" : "In-active"}>
          <DashboardSvg fill={colors.gray2} width="35px" height="35px" />
          <ListItems> {translations?.dashboard}</ListItems>
        </Link>
        <Link href="/" className={width ? "active" : "In-active"}>
          <ScheduleSvg fill={colors.gray2} width="35px" height="35px" />
          <ListItems> {translations?.coachSchedule}</ListItems>
        </Link>
        <Link href="/" className={width ? "active" : "In-active"}>
          <BookingSvg fill={colors.gray2} width="35px" height="35px" />
          <ListItems> {translations?.coachBookings}</ListItems>
        </Link>
      </List>
      <IconWrapper
        onClick={handleWidth}
        className={width ? "active" : "In-active"}
      >
        <ArrowDown fill={"#fff"} width="30px" height="30px" />
      </IconWrapper>
    </Container>
  );
};
export default SideNavBar;
