function MenuItem({ name, price, image }) {
  return (
    <li
      style={{
        listStyle: "none",
      }}
    >
       <img src ={image} width={"500px"} height={"200px"} style={{width:"500px", height:"250px"}}/>
      <div>
        <h1 style={{marginTop:"5px"}}>{name}</h1>
        <span>Rp {price.toLocaleString("id")}</span>
      </div>
    </li>
  );
}
export default MenuItem;
