import Billiard from "../../Billiard/Billiard";
import Hr from "../Hr/Hr";
import Katalogs from "../KatalogMini/Katalogs";
import Order from "../Order/Order";
import Redemption from "../Redemption/Redemption";
import Hits from "../SalesHits/Hits";
import Stoks from "../Stocks/Stocks";
import Delivery from "../Delivery/Delivery";




const Home = () => {


  return (
    <>
      <Billiard />
      <Katalogs />
      <Hr title="Хиты продаж" />
      <Hits />
      <Hr title="Акции" />
      <Stoks />
      <Hr title="Выкуп" />
      <Redemption />
      <Hr title="На заказ" />
      <Order />
      <Hr title="Оплата и доставка" />
      <Delivery />
    </>
  );
};

export default Home;
