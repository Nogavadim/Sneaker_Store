import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
// import products from "./data/products"; // импорт масива товаров





function App() {

  const [products, setProducts] = React.useState([ ])
  const [productsItems, setProductsItems] = React.useState([ ])

const [cartOpened, setCartOpened] = React.useState(false)

React.useEffect(() => {
  fetch ('https://64f09c2d8a8b66ecf779ea7e.mockapi.io/items').then((res) => {
    return res.json()
  }).then((json) => setProducts(json))

},[])

const onAddToCart = (obj) => {
  setProductsItems( prev =>  [...prev, obj])
}

console.log(productsItems);



  return (
    <div className="wrapper">


      {/* {cartOpened ?  <Drawer onClose={() => setCartOpened(false)}/> : null} */}
      {cartOpened &&  <Drawer products={productsItems} onClose={() => setCartOpened(false)}/>} {/* Сокртили запись открытия корзины */ }
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">

        <div className="content-search">
          <h1>Все кросовки</h1>

          <div className="search-block">
            <img src="/img/search.svg" alt="logo-serach" />
            <input placeholder="Поиск..." />
          </div>
        </div>



        <ul className="list-reset content-list">

          {products.map((item) =>
            <Card key={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() =>  console.log('Добавили в закладки')}
            />
          )}

        </ul>


      </div>
    </div>
  );
}

export default App;
