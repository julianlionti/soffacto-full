import { styled, Typography } from "@mui/material";
import { BoldTipo } from "./common/BoldTypo";

const Root = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
  minWidth: 120,
}));

const List = styled("ul")`
  list-style-type: none;
  padding-inline-start: 0;
`;

type BulletProp = { title: string; link?: string; keepInPage?: boolean };
type Props = { title: string; bullets?: BulletProp[] };
export const FooterCard = (props: Props) => {
  const { title, bullets } = props;

  return (
    <Root>
      <BoldTipo variant="overline">{title}</BoldTipo>
      <List>
        {bullets?.map((bul) => (
          <li key={bul.title}>{bul.title}</li>
        ))}
      </List>
    </Root>
  );
};
