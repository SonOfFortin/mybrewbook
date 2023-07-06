import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import useToggleStyle from "../hooks/useToggleStyle";

import { useSelector } from "react-redux";
import { selectTheme } from "../utils/store/selectors";

//Route
import Dashboards from "../components/Dashboards";
import Batches from "../components/pages/app/Batches";
import MyRecipes from "../components/pages/receipts/Myrecipes";
import Library from "../components/pages/receipts/Library";
import Inventory from "../components/pages/shelves/Inventory";
import Shopping from "../components/pages/shelves/Shopping";

import Alcohol from "../components/pages/tools/Alcohol";
import YeastStarter from "../components/pages/tools/YeastStarter";
import Refractometer from "../components/pages/tools/Refractometer";
import Correction from "../components/pages/tools/Correction";
import Temperature from "../components/pages/tools/Temperature";
import Carbonation from "../components/pages/tools/Carbonation";
import Color from "../components/pages/tools/Color";
import RestTemperature from "../components/pages/tools/RestTemperature";
import Calibration from "../components/pages/tools/Calibration";

const MainRoutes = () => {
    const theme = useSelector(selectTheme);
    const { isLoaded } = useToggleStyle(
        /*config.isRTL,
        config.isDark,
        configDispatch*/
        false,
        theme === "dark" ? true : false
    );

    return !isLoaded ? (
        <div
            style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
                //backgroundColor: config.theme === "dark" ? getColor('dark') : getColor('light')
            }}
        />
    ) : (
        <Router>
            {/*<GlobalStyle />*/}
            <Routes>
                <Route element={<MainLayout />}>
                    {/* Dashbords */}
                    <Route exact path="/" element={<Dashboards />} />
                    {/* App */}
                    <Route path="app/batches" element={<Batches />} />
                    {/* Recette */}
                    <Route path="receipts/myrecipes" element={<MyRecipes />} />
                    <Route path="receipts/library" element={<Library />} />
                    {/* Inventaire / Stock */}
                    <Route path="shelves/inventory" element={<Inventory />} />
                    <Route path="shelves/shopping" element={<Shopping />} />
                    {/* Outils */}
                    <Route path="/tools/alcohol" element={<Alcohol />} />
                    <Route
                        path="/tools/yeaststarter"
                        element={<YeastStarter />}
                    />
                    <Route
                        path="/tools/refractometer"
                        element={<Refractometer />}
                    />
                    <Route path="/tools/correction" element={<Correction />} />
                    <Route
                        path="/tools/temperature"
                        element={<Temperature />}
                    />
                    <Route
                        path="/tools/carbonation"
                        element={<Carbonation />}
                    />
                    <Route path="/tools/color" element={<Color />} />
                    <Route
                        path="/tools/resttemperature"
                        element={<RestTemperature />}
                    />
                    <Route
                        path="/tools/calibration"
                        element={<Calibration />}
                    />
                </Route>
                {/*<Route path="*" element={<Error />} />*/}
            </Routes>
            {/*<Footer />*/}
        </Router>
    );
};

export default MainRoutes;
