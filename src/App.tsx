import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard/Dashboard';
import {ApplicationProvider} from './providers/ApplicationProvider/ApplicationProvider';
import {ThemeProvider} from '@mui/system';
import {defaultTheme} from './themes/defaultTheme';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={defaultTheme}>
        <ApplicationProvider>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path="/" element={<Dashboard />}
                />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
        </ApplicationProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
