import { Box, FormControl, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ButtonPrimaryS } from "../../ui/buttons/ButtonPrimaryS";
import { FormHelperTextPrimary } from "../../ui/fields/FormHelperTextPrimary";
import { LinkPrimary } from "../../ui/fields/LinkPrimary";
import { TextFieldPrimary } from "../../ui/fields/TextFieldPrimary";
import { MainLogo } from "../../ui/Logos/MainLogo";
import { Layout } from "../Layout";

const formControlStyles = (theme) => ({
  marginBottom: theme.spacing(3),
});

export const Login = () => {
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
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary id="password-helper-text">
                Password
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="password"
                error={false}
                aria-describedby="password-helper-text"
              />
            </FormControl>
            <ButtonPrimaryS fullWidth>Login</ButtonPrimaryS>
            <Typography variant="h4" align="center" sx={{ mt: 1, mb: 1 }}>
              OR
            </Typography>
            <ButtonPrimaryS fullWidth>Continue as Guest</ButtonPrimaryS>
            <Stack direction="row" alignItems="center" justifyContent="space-between" marginTop={3}>
              <Link href="/" legacyBehavior passHref>
                <LinkPrimary variant="h4">forgot password</LinkPrimary>
              </Link>
              <Link href="/" legacyBehavior passHref>
                <LinkPrimary variant="h4">Sign Up</LinkPrimary>
              </Link>
            </Stack>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};
