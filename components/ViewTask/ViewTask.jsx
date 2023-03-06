import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useDarkMode } from "../../hooks/useDarkMode";

const ViewTaskBoxStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})(({ theme, darkMode }) => ({
  ...theme.components.modalDialog,
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),

  ...(darkMode &&
    {
      backgroundColor: theme.palette.common.darkGrey,
    }),
}));

export const ViewTask = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ViewTaskBoxStyle darkMode={useDarkMode()}>
        <Stack direction="row" marginBottom={3}>
          <Typography variant="h2">
            Research pricing points of various competitors and trial different
            business models
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Stack>
        <Box marginRight={2}>
          <Typography
            variant="body1"
            marginBottom={3}
            color="common.mediumGrey"
          >
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </Typography>
        </Box>
      </ViewTaskBoxStyle>
    </Modal>
  );
};
