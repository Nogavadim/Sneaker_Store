import React from 'react'

export default function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
    <div className="drawer">
      <div className="drawer-head">
        <h2>Корзина</h2>
        <button className="btn-reset">
          <img width={30} height={30} src="/img/btn-close.png" alt="logo" />
        </button>
      </div>

      <ul className="cartList list-reset">

        <li className="cartItem">
          <img width={70} height={70} src="/img/sneakers/sneakers-1.png" alt="logo" />
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <span>12 999 руб.</span>
          </div>

          <button className="btn-reset">
            <img width={30} height={30} src="/img/btn-close.png" alt="logo" />
          </button>

        </li>

        <li className="cartItem">
          <img width={70} height={70} src="/img/sneakers/sneakers-1.png" alt="logo" />
          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <span>12 999 руб.</span>
          </div>

          <button className="btn-reset">
            <img width={30} height={30} src="/img/btn-close.png" alt="logo" />
          </button>

        </li>

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
