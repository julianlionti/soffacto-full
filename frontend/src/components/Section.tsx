import { styled } from "@mui/material";
import { PropsWithChildren, useCallback } from "react";

export type Sections = "home" | "about" | "services" | "team" | "contact";

type StyleProps = Partial<{
  noOffset: boolean;
  contrast: boolean;
  large: boolean;
}>;

const Root = styled("div", {
  shouldForwardProp: (props: any) =>
    props !== "noOffset" && props !== "contrast" && props !== "large",
})<StyleProps>(({ contrast, noOffset, theme, large }) => ({
  height: large ? undefined : "100vh",
  minHeight: large ? "100vh" : undefined,
  padding: `0 ${theme.spacing(1)}`,
  [theme.breakpoints.up("sm")]: {
    padding: `0 ${theme.spacing(20)}`,
  },
  paddingTop: noOffset ? 0 : 80,
  backgroundColor: contrast
    ? theme.palette.common.white
    : theme.palette.common.black,
}));

const Content = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = PropsWithChildren<
  Partial<{
    center: boolean;
    noOffset: boolean;
    name: Sections;
    contrast: boolean;
    large: boolean;
  }>
>;
export const Section = (props: Props) => {
  const { children, center, noOffset, name, contrast, large } = props;

  const renderChildren = useCallback(() => {
    if (center) return <Content>{children}</Content>;

    return children;
  }, []);

  return (
    <Root id={name} noOffset={noOffset} contrast={contrast} large={large}>
      {renderChildren()}
    </Root>
  );
};
