import { BrowserRouter } from "react-router-dom";
import AppRoutesLocal from "./navigation/AppRoutes";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex justify-center items-center">Yükleniyor...</div>}>
        <AppRoutesLocal />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
