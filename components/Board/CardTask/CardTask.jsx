import { Card, Typography, CardContent, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useDarkMode } from "../../../hooks/useDarkMode";

const CardTaskStyle = styled(Card, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, darkMode }) => ({
  ...theme.components.cardTask,
  boxShadow: "0px 4px 6px rgba(54, 78, 126, 0.101545)",
  "&:hover": {
    cursor: "pointer",
  },
  ...(darkMode && {
    backgroundColor: theme.palette.common.darkGrey,
  }),
}));

export const CardTask = (props) => {

  return (
    <CardTaskStyle darkMode={useDarkMode()} {...props}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Build UI for onboarding flow
        </Typography>
        <Typography variant="h4">0 of 6 substasks</Typography>
      </CardContent>
    </CardTaskStyle>
  );
};
