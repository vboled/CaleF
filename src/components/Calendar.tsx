import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StyleSheet} from 'react-native';

export default function Calendar() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6}/>
      </LocalizationProvider>
    );
}



