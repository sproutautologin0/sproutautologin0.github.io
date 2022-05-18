import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Login} from './pages/Login';
import {Dashboard} from './pages/Dashboard/Dashboard';
import {ApplicationProvider} from './providers/ApplicationProvider/ApplicationProvider';
import {ThemeProvider} from '@mui/system';
import {defaultTheme} from './themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApplicationProvider>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path="/" element={<Dashboard />}
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </ApplicationProvider>
    </ThemeProvider>
  );
}

export default App;
