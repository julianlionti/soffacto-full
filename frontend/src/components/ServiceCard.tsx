import { Card, CardContent, styled, Typography } from "@mui/material";
import { useMemo } from "react";
import { useT } from "../translations";
import { BoldTipo } from "./common/BoldTypo";
import QualityIcon from "../assets/icons/programming.svg";
import ServerIcon from "../assets/icons/server.svg";
import HelpIcon from "../assets/icons/help.svg";
import { Space } from "./common/Space";

const Root = styled(Card)(({ theme }) => ({
  width: 325,
  // [theme.breakpoints.up("sm")]: {
  //   width: 300,
  // },
}));

const ImageRoot = styled("div")`
  display: flex;
  justify-content: center;
  height: 175px;
  padding: 16px;
`;

const TextRoot = styled("div")`
  height: 75px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

type Props = { position: number };
export const ServiceCard = (props: Props) => {
  const { position } = props;
  const t = useT();

  const finalImage = useMemo(() => {
    switch (position) {
      default:
      case 1:
        return QualityIcon;
      case 2:
        return ServerIcon;
      case 3:
        return HelpIcon;
    }
  }, [position]);

  return (
    <Root>
      <CardContent>
        <ImageRoot>
          <img
            alt={t(`services.${position}.title` as any) as string}
            src={finalImage}
          />
        </ImageRoot>
        <Space />
        <TextRoot>
          <BoldTipo variant="h5">
            {t(`services.${position}.title` as any)}
          </BoldTipo>
          <Typography>
            {t(`services.${position}.description` as any)}
          </Typography>
        </TextRoot>
      </CardContent>
    </Root>
  );
};
