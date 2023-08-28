import Router from './Router';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const content = useRoutes(Router);
  return content;
};
export default App;
