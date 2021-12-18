import { HorizontalDiv } from "./common/HorizontalDiv";
import CodeInspection from "../assets/icons/code_inspection.svg";
import { Section } from "./Section";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import { useT } from "../translations";
import { FlexDiv } from "./common/FlexDiv";
import { BoldTipo } from "./common/BoldTypo";
import { Space } from "./common/Space";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

const ImgDiv = styled("img")`
  width: auto;
  height: 250px;
`;

const CenterFlex = styled(FlexDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const About = () => {
  const t = useT();

  return (
    <Section center name="about">
      <HorizontalDiv>
        <FlexDiv>
          <Fade triggerOnce>
            <Typography variant="subtitle1" color="lightblue">
              {t("about.title")}
            </Typography>
            <Space isVertical />
            <BoldTipo variant="h3">{t("about.maintitle")}</BoldTipo>
            <Space isVertical />
            <Typography>{t("about.descripction")}</Typography>
          </Fade>
        </FlexDiv>
        <Space isVertical />
        <CenterFlex>
          <Fade triggerOnce delay={500}>
            <ImgDiv src={CodeInspection} />
          </Fade>
        </CenterFlex>
      </HorizontalDiv>
    </Section>
  );
};
