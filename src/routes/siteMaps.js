export const dashboardRoutes = {
    label: "Dashboard",
    labelDisable: true,
    children: [
        {
            name: "Dashboard",
            icon: "chart-pie",
            to: "/",
            active: true
        }
    ]
};

export const appRoutes = {
    label: "app",
    children: [
        {
            name: "Brassage",
            icon: "fire",
            to: "/app/batches",
            active: true
        },
        {
            name: "Recettes",
            icon: "book",
            active: true,
            children: [
                {
                    name: "Mes recettes",
                    to: "/receipts/myrecipes",
                    active: true
                },
                {
                    name: "Bibliothèque",
                    to: "/receipts/library",
                    active: true
                }
            ]
        },
        {
            name: "Stock",
            icon: "boxes",
            active: true,
            children: [
                {
                    name: "Inventaire",
                    to: "/shelves/inventory",
                    active: true
                },
                {
                    name: "Magasiner",
                    to: "/shelves/shopping",
                    active: true
                }
            ]
        },
        {
            name: "Outils",
            icon: "tools",
            active: true,
            children: [
                {
                    name: "Général",
                    active: true,
                    children: [
                        {
                            name: "Alcool",
                            to: "/tools/alcohol",
                            active: true
                        },
                        {
                            name: "Starter de levure",
                            to: "/tools/yeaststarter",
                            active: true
                        },
                        {
                            name: "Réfractomètre",
                            to: "/tools/refractometer",
                            active: true
                        },
                        {
                            name: "Densité",
                            to: "/tools/correction",
                            active: true
                        },
                        {
                            name: "Température",
                            to: "/tools/temperature",
                            active: true
                        },
                        {
                            name: "Carbonatation",
                            to: "/tools/carbonation",
                            active: true
                        },
                        {
                            name: "Couleur",
                            to: "/tools/color",
                            active: true
                        }
                    ]
                },
                {
                    name: "Empâtage",
                    active: true,
                    children: [
                        {
                            name: "Température",
                            to: "/tools/resttemperature",
                            active: true
                        },
                        {
                            name: "Calibration",
                            to: "/tools/calibration",
                            active: true
                        }
                    ]
                }
            ]
        }
    ]
};

const exportedObject = [dashboardRoutes, appRoutes];

export default exportedObject;
