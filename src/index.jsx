import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./utils/store/index";
import { QueryClient, QueryClientProvider } from "react-query";
import MainRoutes from "./routes/index";
import "./helpers/initFA";

const root = ReactDOM.createRoot(document.getElementById("main"));

// on créer le queryClient
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <React.StrictMode>
                <MainRoutes />
            </React.StrictMode>
        </Provider>
    </QueryClientProvider>
);
