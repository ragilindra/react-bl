import './App.css';
import { ContextProvider } from './context/Context';

import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
      {/* <HomeClass /> */}
    </ContextProvider>
  );
}

export default App;
