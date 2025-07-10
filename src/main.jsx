// Change this:

// To this:
import { HashRouter } from "react-router-dom";

// Then wrap with <HashRouter>:
<HashRouter>
  <PlayerContextProvider>
    <App />
  </PlayerContextProvider>
</HashRouter>;
