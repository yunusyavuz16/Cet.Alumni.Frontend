import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "sweetalert2/src/sweetalert2.scss";
import AppRoutes from "./navigation/AppRoutes";
import moment from "moment";
import { JobVisibilityProvider } from "./contexts/JobProvider";
moment.locale("tr");

function App() {
  return (
    <JobVisibilityProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              Yükleniyor...
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </JobVisibilityProvider>
  );
}

export default App;
