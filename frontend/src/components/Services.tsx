import { useMediaQuery, useTheme } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { useT } from "../translations";
import { BoldTipo } from "./common/BoldTypo";
import { HorizontalDiv } from "./common/HorizontalDiv";
import { Space } from "./common/Space";
import { Section } from "./Section";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const t = useT();
  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Section center name="services" contrast large={!isBig}>
      <BoldTipo
        variant="h3"
        sx={{
          textAlign: "center",
          color: (theme) => theme.palette.common.black,
        }}
      >
        {t("services.title")}
      </BoldTipo>
      <Space isVertical={!isBig} />
      <HorizontalDiv>
        <Fade cascade triggerOnce damping={0.25}>
          <ServiceCard position={1} />
          <Space isVertical={!isBig} />
          <ServiceCard position={2} />
          <Space isVertical={!isBig} />
          <ServiceCard position={3} />
          <Space isVertical={!isBig} />
        </Fade>
      </HorizontalDiv>
    </Section>
  );
};
