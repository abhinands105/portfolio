import { HashRouter } from "react-router-dom";

import RoutesConfig from "./routes";

const App = () => {
  return (
    <HashRouter>
      <RoutesConfig />
    </HashRouter>
  );
};

export default App;