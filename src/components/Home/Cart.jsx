import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import moment from "moment";

import { Button, Modal } from "flowbite-react";

function Cart({ carts, dispatch }) {
  const initialOrderHistory = JSON.parse(localStorage.getItem("orderHistory"));
  const [orderHistory, setOrderHistory] = useState(initialOrderHistory || []);
  const totalPrice = carts.reduce((total, cart) => total + cart.totalPrice, 0);
  const tax = totalPrice * 0.1;
  const serviceCharge = totalPrice * 0.05;
  const grandTotal = totalPrice + tax + serviceCharge;
  const [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  function handleDeleteItem(id) {
    dispatch({
      type: "delete_cart_item",
      itemId: id,
    });
  }

  function handleIncreaseQuantity(cart) {
    dispatch({
      type: "increase_quantity",
      payload: cart,
    });
  }

  function handleDecreaseQuantity(cart) {
    dispatch({
      type: "decrease_quantity",
      payload: cart,
    });
  }

  function placeOrder() {
    const now = moment().format("YYYYMMDD");
    const randomNumbers = Math.floor(Math.random() * 1000) + 1;
    const orderNumber = `${now}-${randomNumbers}`;
    const orderItems = carts.filter((cart) => cart.quantity > 0);

    const order = {
      orderNumber,
      totalPrice,
      serviceCharge,
      tax,
      grandTotal: totalPrice + tax + serviceCharge,
      items: orderItems.map((cart) => {
        return {
          name: cart.name,
          quantity: cart.quantity,
          price: cart.totalPrice,
          serviceCharge: cart.serviceCharge,
          grandTotal: cart.grandTotal,
        };
      }),
    };
    setOrderNumber(orderNumber);
    setOrderHistory((prevOrderHistory) => [...prevOrderHistory, order]);
    setShowOrderSuccessModal(true);
    return dispatch({
      type: "checkout_item",
    });
  }

  useEffect(() => {
    if (orderHistory.length > 0) {
      console.log(orderHistory);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
    }
  }, [orderHistory]);

  return (
    <div className="bg-white w-[20%] rounded-lg shadow-md border py-5">
      <h1 className="text-center font-bold text-3xl text-black mb-5">
        Your Cart
      </h1>

      <div className="flex flex-col justify-between h-[700px]">
        <ul className="overflow-y-auto px-5">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="bg-white flex p-3 justify-between rounded-lg my-5"
            >
              <CartItem
                name={cart.name}
                image={cart.image}
                price={cart.totalPrice}
                notes={cart.notes}
              />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button
                    disabled={cart.quantity <= 1}
                    onClick={() => handleDecreaseQuantity(cart)}
                    color="white"
                    className="w-[30px] h-[30px]"
                    style={{ color: "black", fontSize: "16px" }}
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold">
                    {cart.quantity}
                  </span>
                  <Button
                    onClick={() => handleIncreaseQuantity(cart)}
                    color="white"
                    className="w-[30px] h-[30px]"
                    style={{ color: "black", fontSize: "16px" }}
                  >
                    +
                  </Button>
                </div>

                <Button
                  className="w-full h-[30px]"
                  onClick={() => handleDeleteItem(cart.id)}
                  color="failure"
                  style={{ fontSize: "14px" }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </ul>

        <div className="space-y-5 px-5">
          <div className="divide-y">
            <div className="py-3">
              <div className="flex justify-between text-lg">
                <p>Total Price</p>
                <p>{totalPrice.toLocaleString("id")}</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Tax</p>
                <p>{tax.toLocaleString("id")}</p>
              </div>
              <div className="flex justify-between text-lg">
                <p>Service Charge</p>
                <p>{serviceCharge.toLocaleString("id")}</p>
              </div>
            </div>

            <div className="flex justify-between py-3 font-semibold text-xl">
              <p>Grand Total</p>
              <p>{grandTotal.toLocaleString("id")}</p>
            </div>
          </div>

          <Button
            className="w-full text-xl"
            color="success"
            disabled={carts.length === 0}
            onClick={() => placeOrder()}
          >
            Place Order
          </Button>

          <Modal show={showOrderSuccessModal} onClose={() => setShowOrderSuccessModal(false)}>
  <Modal.Header>
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-500 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 13a1 1 0 002 0v-2a1 1 0 00-2 0v2zm0-8a1 1 0 00.293.707l3 3a1 1 0 11-1.414 1.414L10 6.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 019 5z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-lg font-semibold text-green-500">Order Success</span>
    </div>
  </Modal.Header>
  <Modal.Body>
    <p>Order successfully ordered - Order Number: {orderNumber}</p>
  </Modal.Body>
  <Modal.Footer>
    <Button
      color="blue"
      onClick={() => setShowOrderSuccessModal(false)}
      style={{ fontSize: "16px" }}
    >
      Close
    </Button>
  </Modal.Footer>
</Modal>

        </div>
      </div>
    </div>
  );
}

export default Cart;