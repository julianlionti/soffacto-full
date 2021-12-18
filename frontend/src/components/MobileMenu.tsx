import {
  AppBar,
  Dialog,
  Icon,
  IconButton,
  Slide,
  styled,
  Toolbar,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, Fragment, Ref } from "react";
import { useT } from "../translations";
import { ButtonLink } from "./common/ButtonLink";
import { FlexDiv } from "./common/FlexDiv";
import { Space } from "./common/Space";
import { MenuBtns } from "./Header";
import { Sections } from "./Section";

type TraType = TransitionProps & { children?: React.ReactElement<any, any> };
const Transition = forwardRef<Ref<unknown>, TraType>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const Root = styled("div")`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

type Props = {
  open: boolean;
  onClose: (section?: Sections) => void;
  active: Sections;
};
export const MobileMenu = (props: Props) => {
  const t = useT();
  const { onClose, open, active } = props;

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <AppBar position="fixed" color="transparent" elevation={0}>
        <Toolbar>
          <FlexDiv />
          <IconButton
            onClick={() => onClose()}
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <Icon>close</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Root>
        {MenuBtns.map((section) => (
          <Fragment key={section}>
            <ButtonLink
              isActive={section === active}
              onClick={() => onClose(section)}
              color="inherit"
            >
              {t(section as any)}
            </ButtonLink>
            <Space isVertical={true} />
          </Fragment>
        ))}
      </Root>
    </Dialog>
  );
};
