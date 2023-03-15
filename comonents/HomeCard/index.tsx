import CardComponent from "comonents/ReuseableComponents/CardComponent";
import * as React from "react";
import { useTheme } from "styled-components";
import { HomeCardContainer } from "./style";
const HomeCard = () => {
  const { translations, colors } = useTheme();
  return (
    <HomeCardContainer>
      <CardComponent
        number={23}
        title={translations.pendingrehearsals}
        icon={"clockSvg"}
        color={colors.darkBlue}
      />
      <CardComponent
        number={304}
        title={translations.rehearsalsCompleted}
        icon={"checkSvg"}
        color={"#1cc88a"}
      />
      <CardComponent
        number={21}
        title={translations.totalRatings}
        icon={"thumbsUpSvg"}
        color={"#36b9cc"}
      />
      <CardComponent
        number={4.56}
        title={translations.averageRating}
        icon={"starsSvg"}
        color={"#f6c23e"}
      />
    </HomeCardContainer>
  );
};
export default HomeCard;
