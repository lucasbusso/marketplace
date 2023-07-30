import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";
import { Spinner } from "./common/Spinner";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
