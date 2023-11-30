import { ToastContainer } from "react-toastify";
import "./App.css";
import { MainPage } from "./components/mainpage";
import {
  QueryClient,
  QueryErrorResetBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <div>
                  There was an error!
                  <button
                    onClick={() => {
                      resetErrorBoundary();
                    }}
                  >
                    Try again
                  </button>
                </div>
              )}
            >
              <MainPage />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </>
  );
}

export default App;
