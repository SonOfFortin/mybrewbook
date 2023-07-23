import themeReducer from "./theme";
import navReducer from "./nav";
import notificationReduce from "./notification";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        theme: themeReducer,
        navigation: navReducer,
        notification: notificationReduce
    }
});
