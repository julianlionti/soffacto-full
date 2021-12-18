import { styled } from "@mui/material";

type Props = Partial<{ isVertical: boolean }>;
export const Space = styled("div", {
  shouldForwardProp: (props) => props !== "isVertical",
})<Props>(({ isVertical, theme }) => ({
  margin: isVertical ? `${theme.spacing(2)}` : `0 ${theme.spacing(2)}`,
}));
