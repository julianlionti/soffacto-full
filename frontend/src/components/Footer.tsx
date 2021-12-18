import { styled } from "@mui/material";
import { useT } from "../translations";
import { FooterCard } from "./FooterCard";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: `${theme.spacing(2)} 0`,
}));

export const Footer = () => {
  const t = useT();
  return (
    <Root>
      <FooterCard
        title={t("footer.about") as string}
        bullets={[
          { title: t("footer.about.howitworks") as string },
          { title: t("footer.about.investors") as string },
          { title: t("footer.about.testimonials") as string },
        ]}
      />
      <FooterCard
        title={t("footer.socialMedia") as string}
        bullets={[
          { title: "Facebook" },
          { title: "Instagram" },
          { title: "Linkedin" },
        ]}
      />
    </Root>
  );
};
