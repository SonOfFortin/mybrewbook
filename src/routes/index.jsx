import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import Landing from "../components/pages/landing/Landing";

const MainRoutes = () => {
    return (
        <Router>
            {/*<GlobalStyle />*/}
            <Routes>
                <Route path="landing" element={<Landing />} />
                <Route element={<MainLayout />}>
                    <Route exact path="/" element={<App />} />
                </Route>
                {/*<Route path="*" element={<Error />} />*/}
            </Routes>
            {/*<Footer />*/}
        </Router>
    );
};

export default MainRoutes;
