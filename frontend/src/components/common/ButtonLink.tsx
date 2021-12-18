import { Button, styled } from "@mui/material";

type StyleProps = Partial<{ isActive: boolean }>;

export const ButtonLink = styled(Button, {
  shouldForwardProp: (props) => props !== "isActive",
})<StyleProps>(({ isActive, theme }) => ({
  textDecoration: isActive ? "underline" : undefined,
  textDecorationColor: theme.palette.primary.main,
  textDecorationThickness: "2px",
  textUnderlineOffset: "8px",

  "&:hover": {
    textDecoration: isActive ? "underline" : undefined,
    textDecorationColor: theme.palette.primary.main,
  },
}));
