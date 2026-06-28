import { HashRouter } from "react-router-dom";

import RoutesConfig from "./routes";
import ScrollToTop from "./components/layout/ScrollToTop";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <RoutesConfig />
    </HashRouter>
  );
};

export default App;