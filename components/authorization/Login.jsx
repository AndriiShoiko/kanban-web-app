import { Box, FormControl, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { ButtonPrimaryS } from "../../ui/buttons/ButtonPrimaryS";
import { FormHelperTextPrimary } from "../../ui/fields/FormHelperTextPrimary";
import { LinkPrimary } from "../../ui/fields/LinkPrimary";
import { TextFieldPrimary } from "../../ui/fields/TextFieldPrimary";
import { MainLogo } from "../../ui/Logos/MainLogo";
import { Layout } from "../Layout";
import { emailPattern } from "../../utils/validate/patterns";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { login } from "../../services/authService";

const formControlStyles = (theme) => ({
  marginBottom: theme.spacing(3),
});

export const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const res_data = await login(data.email, data.password);

    if (res_data.success) {
      router.push("/");
    } else {
      console.error(res_data);
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormHelperTextPrimary
                id="email-helper-text"
                error={errors.email ? true : false}
              >
                E-mail
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="e-mail"
                {...register("email", {
                  required: true,
                  pattern: emailPattern,
                })}
                error={errors.email ? true : false}
                aria-describedby="email-helper-text"
                size="medium"
              />
            </FormControl>
            <FormControl fullWidth sx={formControlStyles}>
              <FormHelperTextPrimary
                id="password-helper-text"
                error={errors.password ? true : false}
              >
                Password
              </FormHelperTextPrimary>
              <TextFieldPrimary
                placeholder="password"
                {...register("password", { required: true, minLength: 5 })}
                error={errors.password ? true : false}
                aria-describedby="password-helper-text"
                type="password"
              />
            </FormControl>
            <ButtonPrimaryS fullWidth type="submit" disabled={!isValid}>
              Sign In
            </ButtonPrimaryS>
            <Typography variant="h4" align="center" sx={{ mt: 1, mb: 1 }}>
              OR
            </Typography>
            <ButtonPrimaryS fullWidth>Continue as Guest</ButtonPrimaryS>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginTop={3}
            >
              <Link href="/forgot-password" legacyBehavior passHref>
                <LinkPrimary variant="h4">forgot password</LinkPrimary>
              </Link>
              <Link href="/registration" legacyBehavior passHref>
                <LinkPrimary variant="h4">Sign Up</LinkPrimary>
              </Link>
            </Stack>
          </Box>
        </form>
      </Box>
    </Layout>
  );
};
