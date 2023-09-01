import React from 'react'

export default function Drawer({onClose, products = []}) {
  console.log(products);
  return (
    <div className="overlay">
    <div className="drawer">
      <div className="drawer-head">
        <h2>Корзина</h2>
        <button onClick={onClose} className="btn-reset">
          <img width={30} height={30} src="/img/btn-close.png" alt="logo" />
        </button>
      </div>

      <ul className="cartList list-reset">

        {products.map((obj) => {

            return (
              <li key={obj.id} className="cartItem">
              <img width={70} height={70} src={obj.imgUrl} alt="logo" />
              <div>
                <p>{obj.title}</p>
                <span>{obj.price} руб.</span>
              </div>

              <button className="btn-reset">
                <img width={30} height={30} src="/img/btn-close.png" alt="logo" />
              </button>

            </li>
            )
        })}



      </ul>

      <div className="cartTotal">
        <ul className="list-reset cartTotalList">
          <li className="cartTotalItem">
            <span>Итого: </span>

            <b>21 498 руб.</b>
          </li>
          <li className="cartTotalItem">
            <span>Налог 5%: </span>

            <b>1074 руб. </b>
          </li>
        </ul>

      </div>

      <button className="btn-reset btn-green">Оформить заказ</button>
    </div>
    </div>
  )
}
