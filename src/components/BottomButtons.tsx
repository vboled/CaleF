import ButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import {StarOutline, CalendarMonth} from '@mui/icons-material';

export default function BottomButtons() {
    return (<ButtonGroup color='secondary' orientation='horizontal' variant='contained' fullWidth={true}>
        <IconButton ><StarOutline /></IconButton>
        <IconButton><CalendarMonth/></IconButton>
        <IconButton><StarOutline /></IconButton>
    </ButtonGroup>
);
}

