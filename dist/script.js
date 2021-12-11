function Product() {

  var [products, setProducts] = React.useState([
  { name: "T-shirt", qty: 0, price: 300 },
  { name: "Top", qty: 0, price: 200 },
  { name: "Jeans", qty: 0, price: 500 },
  { name: "Shirt", qty: 0, price: 350 },
  { name: "Kurti", qty: 0, price: 100 }]);


  var totalQty = () => {
    var total = 0;
    products.forEach(item => {
      total += item.qty;
    });
    return total;
  };

  var totalAmount = () => {
    var amount = 0;
    products.forEach(item => {
      amount += item.qty * item.price;
    });
    return amount;
  };

  const manageQty = (index, qty) => {
    var change = [...products];
    change[index] = { ...change[index], qty: qty };
    setProducts(change);
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "item" }, /*#__PURE__*/
    React.createElement("h1", null, "E-Commerce cart "),

    products === null || products === void 0 ? void 0 : products.map((item, index) => /*#__PURE__*/
    React.createElement("div", { key: index }, /*#__PURE__*/

    React.createElement("h3", null, "Product Name :", item.name, " QTY :", item.qty, "  PRICE :", item.price), /*#__PURE__*/
    React.createElement("button", { id: "btn1", onClick: () => manageQty(index, item.qty + 1) }, "Add To Cart"), /*#__PURE__*/
    React.createElement("button", { id: "btn2", onClick: () => item.qty == 0 ? 0 : manageQty(index, item.qty - 1) }, "Remove To Cart"))), /*#__PURE__*/




    React.createElement("h3", null, "Total Quantity :", totalQty(), " "), /*#__PURE__*/
    React.createElement("h3", null, "Total Amount : ", totalAmount())));


}
ReactDOM.render( /*#__PURE__*/
React.createElement(Product, null),
document.getElementById('root'));