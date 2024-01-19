import { Accordion, Button } from "flowbite-react";
import React from "react";

function OrderItem({ order }) {
  return (
    <>
    
    <Accordion>
    
      <Accordion.Panel>
        <Accordion.Title>Order #{order.orderNumber}</Accordion.Title>
        
        <Accordion.Content>
          <ul>
            {order.items.map((orderItem) => (
              <li className="flex justify-between" key={orderItem.name}>
                <p>
                  {orderItem.quantity}x {orderItem.name}
                </p>
                <p>{orderItem.price.toLocaleString("id")}</p>
              </li>
            ))}
          </ul>

          <div className="divide-y">
            <div className="py-3">
              <div className="flex justify-between">
                <p>Total Price</p>
                <p>{order.totalPrice.toLocaleString("id")}</p>
                {/* <p>{order.totalPrice.toLocaleString("id")}</p> */}
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                {/* <p>{order.tax.toLocaleString("id")}</p> */}
              </div>
              <div className="flex justify-between">
                <p>Service Charge</p>
                {/* <p>{order.serviceCharge.toLocaleString("id")}</p> */}
              </div>
            </div>

            <div className="flex justify-between py-3 font-semibold">
              <p>Grand Total</p>
              <p>{order.grandTotal.toLocaleString("id")}</p>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  );
}

export default OrderItem;
