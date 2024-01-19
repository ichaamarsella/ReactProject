import React from "react";
import MenuItem from "./MenuItem";
import { Button, Card, TextInput } from "flowbite-react";
const pizzas = [
  {
    id: 0,
    image: "https://www.tastingtable.com/img/gallery/13-secrets-to-making-the-best-fried-chicken-ever/l-intro-1663165977.jpg",
    name: "Paket 1",
    price: 30000,
    quantity: 1,
    notes: ""
  },
  {
    id: 1,
    image: "https://i.ytimg.com/vi/Sg7_HxA7Jzw/maxresdefault.jpg",
    name: "Paket 2 Spicy",
    price: 27500,
    quantity: 1,
    notes: ""
  },
  {
    id: 2,
    image: "https://wallpaperaccess.com/full/2837410.jpg",
    name: "Chicken Wings",
    price: 35000,
    quantity: 1,
    notes: ""
  },
  {
    id: 3,
    image: "https://wallpapercave.com/wp/wp2375673.jpg",
    name: "Ayam Goreng Mail",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 4,
    image: "https://cdn-brilio-net.akamaized.net/community/community-news/2018/12/27/9b4d07db7ddf465fc3adbecb07a29f19/27-image_1545863662_5c2401ee2cc51.jpg",
    name: "Kentang Goreng",
    price: 12500,
    quantity: 1,
    notes: ""
  },
  {
    id: 5,
    image: "https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/ilustrasi-coca-cola-2.jpg",
    name: "Coca Cola",
    price: 10000,
    quantity: 1,
    notes: ""
  },
  {
    id: 6,
    image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Chicken_Teriyaki_Rice_Bowl_Recipe.jpg",
    name: "Rice Bowl - Chicken Teriyaki",
    price: 15000,
    quantity: 1,
    notes: ""
  },
  {
    id: 7,
    image: "https://foto.kontan.co.id/YbV9x4RHRU58q2r3XpBADPJmN0Y=/smart/2021/10/22/1367633269p.jpg",
    name: "Fire Flying Chicken",
    price: 20000,
    quantity: 1,
    notes: ""
  },
  {
    id: 8,
    image: "https://3.bp.blogspot.com/-bPMlXbo2cPU/V0JXgxrHhBI/AAAAAAAAAkk/Uwj2dZAfoMcNcJNOTASR0NS8uzyLOJ43QCLcB/s1600/Resep%2BCara%2BMembuat%2BAyam%2BKatsu%2BSederhana.jpg",
    name: "Chicken Katsu",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 9,
    image: "https://cdn-2.tstatic.net/style/foto/bank/images/onion-ring_20170913_200118.jpg",
    name: "Onion Ring",
    price: 27500,
    quantity: 1,
    notes: ""
  },
  {
    id: 10,
    image: "https://www.mystart.com/blog/wp-content/uploads/AdobeStock_105962128-e1553804672136.jpeg",
    name: "Ice Cream",
    price: 25000,
    quantity: 1,
    notes: ""
  },
  {
    id: 11,
    image: "https://s3.bukalapak.com/img/8524921702/large/Nasi_Putih_per_porsi.jpg",
    name: "Rice",
    price: 18000,
    quantity: 1,
    notes: ""
  }
]//fungsi yang akan reducer tangkep sebagai action
function Menu({ dispatch, searchValue }) {
  const menu = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleAddToCart(pizza) {
    const notes = document.getElementById(`notes_${pizza.id}`).value;
    dispatch({
      type: "add_to_cart",
      payload: { ...pizza, notes },
    });
    document.getElementById(`notes_${pizza.id}`).value = "";
  }

  return (
    <div className="w-[80%]">
      <ul className="grid grid-cols-4 gap-5">
        {menu.map((pizza) => (
          <Card
            className="bg-white w-full p-[10px] rounded-md shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            key={pizza.id}
          >
            <MenuItem
              key={pizza.id}
              name={pizza.name}
              image={pizza.image}
              price={pizza.price}
            />
            <input
              id={`notes_${pizza.id}`}
              className="px-5 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Add notes..."
            />
            <Button
              onClick={() => handleAddToCart(pizza)}
              color="primary"
              style={{
                backgroundColor: "#3498db",
                color: "white",
                fontSize: "12px",
                padding: "8px 12px",
                marginTop: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add To Cart
            </Button>
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default Menu;