import { createTheme } from '@mui/material/styles'
import { grey,red} from '@mui/material/colors';

export const theme = createTheme({palette: {
    primary: {
      main: red[500],
    },
    mycolor: {
      main: grey[50],
    },
  },})