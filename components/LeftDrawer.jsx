import { Drawer } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useDrawerIsOpen } from '../hooks/useDrawerIsOpen';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: theme.components.drawer.widthDesktop,
        boxSizing: 'border-box',
    }
}));

export const LeftDrawer = (props) => {
    return (
        <StyledDrawer
            variant="persistent"
            anchor="left"
            open={useDrawerIsOpen()}
            {...props}>
        </StyledDrawer>
    )
}