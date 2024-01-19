import { Button } from "flowbite-react";
import OrderItem from "./OrderItem";
import { useState } from "react";

function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orderHistory"));

  const [orderHistoryList, setOrderHistoryList] = useState(orders ?? []);

  return (
    <>
      {orderHistoryList.length > 0 ? (
        <div className="grid grid-cols-2 py-5 gap-5">
          {/* Tombol hapus per order item dan setelah diklik hapus maka akan merender ulang */}
          <Button
            onClick={() => {
              localStorage.clear();
              setOrderHistoryList([]);
            }}
            style={{
              fontSize: "2px", // Sesuaikan ukuran font
              padding: "0.5px .05px", // Sesuaikan padding agar tombol tidak terlalu besar
              backgroundColor: "red", // Warna latar belakang
              color: "white", // Warna teks
            }}
            color="warning"
          >
            Clear History
          </Button>
          {orderHistoryList.map((order) => (
            <div key={order.orderNumber}>
              <OrderItem order={order} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="mt-10 text-center text-3xl text-gray-400">
            No order has been made
          </h1>
        </div>
      )}
    </>
  );
}

export default OrderHistory;
