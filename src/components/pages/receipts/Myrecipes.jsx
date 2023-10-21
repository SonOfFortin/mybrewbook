import CardList from "../../Common/Card/CardList";
import Receipts from "../../../data/tmp/Receipts";
import { InfoStyle as DataInfoStyle } from "../../../data/Receipts/InfoStyle";

const MyRecipes = () => {
    const AddList = MakeList(0);
    const OtherList = MakeList(1);
    const HistoList = MakeList(2);
    const BrassinList = MakeList(3);

    function MakeList(ClassificationRecipes) {
        const newArr = Receipts.filter(
            e => e.ClassificationRecipes === ClassificationRecipes
        ).map(e => {
            return {
                NavigateTo: "/receipts/Retail/" + e.Id,
                Img: e.Image,
                Title: e.Name,
                Describe:
                    DataInfoStyle.find(es => es.Id === e.StyleId).NomFR ??
                    "Not found"
            };
        });

        return newArr;
    }

    return (
        <div>
            <CardList
                IsCollapse={BrassinList.length === 0 ? true : false}
                Title="Brassage en cours"
                Data={BrassinList}
            />
            <br />
            <CardList IsCollapse={false} Title="Mes recettes" Data={AddList} />
            <br />
            <CardList Title="Autres recettes" Data={OtherList} />
            <br />
            <CardList Title="Historique des brassages" Data={HistoList} />
        </div>
    );
};

export default MyRecipes;
