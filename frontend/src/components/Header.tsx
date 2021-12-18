import { AppBar, Hidden, Icon, IconButton, Toolbar } from "@mui/material";
import { styled } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import LogoTrans from "../assets/images/logo_trans.png";
import { useT } from "../translations";
import { ButtonLink } from "./common/ButtonLink";
import { FlexDiv } from "./common/FlexDiv";
import { Space } from "./common/Space";
import { MobileMenu } from "./MobileMenu";
import { Sections } from "./Section";

const Logo = styled("img")(({ theme }) => ({
  height: 70,
  [theme.breakpoints.up("sm")]: {
    height: 80,
  },
  cursor: "pointer",
}));

export const MenuBtns: Sections[] = [
  "home",
  "about",
  "services",
  "team",
  "contact",
];

export const Header = () => {
  const mobileRef = useRef<Sections | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState<Sections>("home");
  const t = useT();

  const goToSection = useCallback((section: Sections) => {
    const element = document.getElementById(section);
    if (!element) throw Error("Section not found");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const spyScroll = () => {
      const scrolledSection =
        MenuBtns[Math.floor(window.scrollY / (window.screen.height - 160))];
      setActive(scrolledSection);
    };
    window.addEventListener("scroll", spyScroll);

    return () => {
      window.removeEventListener("scroll", spyScroll);
    };
  }, []);

  useEffect(() => {
    if (!openMenu && mobileRef.current) {
      goToSection(mobileRef.current);
      mobileRef.current = null;
    }
  }, [openMenu]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Logo
            src={LogoTrans}
            alt="Soffacto Logo"
            onClick={() => goToSection("home")}
          />
          <Space />
          <FlexDiv>
            <Hidden smDown>
              {MenuBtns.filter((e) => e !== "home").map((section) => (
                <ButtonLink
                  key={section}
                  isActive={section === active}
                  onClick={() => goToSection(section)}
                  color="inherit"
                >
                  {t(section as any)}
                </ButtonLink>
              ))}
            </Hidden>
          </FlexDiv>
          <Hidden smUp>
            <IconButton
              onClick={() => setOpenMenu(true)}
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <MobileMenu
        open={openMenu}
        onClose={(selected) => {
          setOpenMenu(false);
          if (selected) {
            mobileRef.current = selected;
          }
        }}
        active={active}
      />
    </>
  );
};
