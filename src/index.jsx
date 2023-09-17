import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./utils/store/index";
import { QueryClient, QueryClientProvider } from "react-query";
import MainRoutes from "./routes/index";
import "./helpers/initFA";
//import * as serviceWorker from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("main"));

// on créer le queryClient
const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <MainRoutes />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
