import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Stack } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import { Typography } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => ({
    color: theme.palette.common.mediumGrey,
    backgroundColor: "inherit",
    minHeight: "48px",
    paddingLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: "0 100px 100px 0",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: alpha(theme.palette.common.mainPurple, 0.1),
    }
}));

export const HideSidebar = (props) => {
    return (
        <StyledStack direction="row" spacing={2} alignItems="center" justifyContent="flex-start" {...props}>
            <VisibilityOffOutlinedIcon />
            <Typography variant="h4">
                Hide Sidebar
            </Typography>
        </StyledStack>
    )
}
