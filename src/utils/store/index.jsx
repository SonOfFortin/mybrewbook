import themeReducer from "../store/theme";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        theme: themeReducer
    }
});
