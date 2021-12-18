import { styled } from "@mui/material";
import { Section } from "./Section";
import { Typography } from "@mui/material";
import { useT } from "../translations";
import Video from "../assets/videos/video.mp4";
import PreloadImg from "../assets/images/preload.jpg";
import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Root = styled("video")`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  /* z-index: -1; */
`;

export const VideoBg = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const t = useT();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.onloadeddata = () => {
        videoRef.current?.play();
      };
    }
  }, []);

  return (
    <Section noOffset center name="home">
      <Root
        ref={(e) => (videoRef.current = e)}
        muted
        preload="none"
        loop
        poster={PreloadImg}
      >
        <source src={Video} type="video/mp4" />
      </Root>
      <Fade triggerOnce>
        <Typography variant="h1">Soffacto</Typography>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          {t("description")}
        </Typography>
      </Fade>
    </Section>
  );
};
