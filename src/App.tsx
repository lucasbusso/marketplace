import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import { NotificationProvider } from "./context/notification.context";
import { Suspense } from "react";
import { Spinner } from "./common/Spinner";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeConfig } from "./config/theme.config";

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Provider store={store}>
            <ThemeConfig>
              <AppRouter />
            </ThemeConfig>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
