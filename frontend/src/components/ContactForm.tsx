import { Grid, TextField } from "@mui/material";
import { BoldTipo } from "./common/BoldTypo";
import { Section } from "./Section";

export const ContactForm = () => {
  return (
    <Section name="contact" contrast center>
      <BoldTipo variant="h3" sx={{ color: "black", textAlign: "center" }}>
        Contactate con nosotross
      </BoldTipo>
      <Grid container>
        <Grid item md={6}>
          <TextField title="Nombre" variant="outlined" placeholder="Nombre" />
        </Grid>
      </Grid>
    </Section>
  );
};
