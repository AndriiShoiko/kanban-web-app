import { Box, FormControl } from "@mui/material";
import { ButtonPrimaryS } from "../../ui/buttons/ButtonPrimaryS";
import { FormHelperTextPrimary } from "../../ui/fields/FormHelperTextPrimary";
import { TextFieldPrimary } from "../../ui/fields/TextFieldPrimary";
import { MainLogo } from "../../ui/Logos/MainLogo";
import { Layout } from "../Layout";

const formControlStyles = (theme) => ({
  marginBottom: theme.spacing(3),
});

export const ForgotPassword = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100wh",
          height: "100vh",
          backgroundColor: "background.default",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form>
          <Box
            sx={{
              width: 480,
              padding: 4,
              backgroundColor: "background.formBackground",
              borderRadius: "6px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <MainLogo />
            </Box>
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary id="email-helper-text" error={false}>
                E-mail
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="e-mail"
                error={false}
                aria-describedby="email-helper-text"
                size="medium"
              />
            </FormControl>
            <ButtonPrimaryS fullWidth>Send me a letter</ButtonPrimaryS>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};
