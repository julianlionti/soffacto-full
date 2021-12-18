import {
  Avatar,
  AvatarGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useT } from "../translations";
import { BoldTipo } from "./common/BoldTypo";
import { HorizontalDiv } from "./common/HorizontalDiv";
import { Space } from "./common/Space";
import { Section } from "./Section";

export const Team = () => {
  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up("sm"));
  const t = useT();

  return (
    <Section name="team" center>
      <BoldTipo variant="h3" sx={{ textAlign: "center" }}>
        {t("team.title")}
      </BoldTipo>
      <Space isVertical />
      <HorizontalDiv>
        <div>
          <Typography>Developers</Typography>
          <Space isVertical />
          <AvatarGroup max={5}>
            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/3.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/4.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </div>
        <Space isVertical={!isBig} />
        <div>
          <Typography>UX Designers</Typography>
          <Space isVertical />
          <AvatarGroup max={5}>
            <Avatar src="https://mui.com/static/images/avatar/5.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/6.jpg" />
            <Avatar src="https://mui.com/static/images/avatar/7.jpg" />
          </AvatarGroup>
        </div>
      </HorizontalDiv>
    </Section>
  );
};
7;
