import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import products from "./data/products"; // импорт масива товаров




function App() {
  return (
    <div className="wrapper">

      <Drawer />
      <Header />

      <div className="content">

        <div className="content-search">
          <h1>Все кросовки</h1>

          <div className="search-block">
            <img src="/img/search.svg" alt="logo-serach" />
            <input placeholder="Поиск..." />
          </div>
        </div>



        <ul className="list-reset content-list">

          {products.map((obj) =>
           <Card  key={obj.id} title={obj.title} price={obj.price} imgUrl={obj.imgUrl}/> // отрисовка карточек спомощью Map
          )}

        </ul>


      </div>
    </div>
  );
}

export default App;
