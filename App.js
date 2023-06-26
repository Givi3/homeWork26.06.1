import Products from "../Products";


function App() {
  const products = [
    {id: 1, title: 'bike', price: '2500'},
    {id: 2, title: 'boat', price: '120000'},
    {id: 3, title: 'car', price: '25000'},
    {id: 4, title: 'motorbike', price: '15000'}
  ]
  return (
    <div>
      {
        // products.map(product => <Products id={product.id} title={product.title} price={product.price}/>)
        products.map((product, index) => <Products key={index} {...product}/>)
      }
      
    </div>
  );
}

export default App;
