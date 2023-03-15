import ArrowDown from "public/icons/arrowDownSvg";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useTheme } from "styled-components";
import {
  ArrowWrapper,
  Container,
  LangButton,
  Langwrapper,
  ProfileImageContainer,
  ProfileList,
  ProfileListItems,
} from "./styled.components";
import UsersSvg from "public/icons/usersSvg";
import Link from "next/link";
import LogoutSvg from "public/icons/logoutSvg";
import { useRouter } from "next/router";
import LangSvg from "public/icons/langsvg";
const Header = () => {
  const router = useRouter();

  const { colors, isLTR, locale, translations } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);
  return (
    <>
      <Container>
        <ProfileImageContainer>
          <div onClick={(e) => handleClick(e)}>
            <img
              src="/images/avatar.png"
              alt="profile iamge"
              width={100}
              height={"auto"}
            />{" "}
            <ArrowWrapper>
              <ArrowDown fill={colors.black1} />
              <span>Muhammad</span>
            </ArrowWrapper>
          </div>
          <Popover
            className={isLTR ? "active" : ""}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography>
              <ProfileList>
                <Link href={`/${locale}/profile`}>
                  <UsersSvg />
                  <ProfileListItems>{translations.myProfile}</ProfileListItems>
                </Link>
                <Link href={`#`}>
                  <LogoutSvg fill={colors.darkBlue} />
                  <ProfileListItems>{translations.logout}</ProfileListItems>
                </Link>
              </ProfileList>
            </Typography>
          </Popover>
        </ProfileImageContainer>
        {locale === "ar" ? (
          <Langwrapper>
            <LangSvg width="25px" height="25px" fill={colors.black1} />
            <LangButton
              href={`/en${router.asPath}`}
              onClick={() => changeLocale()}
            >
              English
            </LangButton>
          </Langwrapper>
        ) : (
          <Langwrapper>
            <LangSvg width="25px" height="25px" fill={colors.black1} />
            <LangButton
              href={`/ar${router.asPath}`}
              onClick={() => changeLocale()}
            >
              العربية
            </LangButton>
          </Langwrapper>
        )}
      </Container>
    </>
  );
};
export default Header;
