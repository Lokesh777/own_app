import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./ProductList.module.css";
import Card from './card/Card';
import CategoryModal from './pieChart/Piechart';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleReadMoreClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    if(selectedCategory===""){
      axios.get(`https://fakestoreapi.com/products/?`)
      .then(res => {
        console.log(res.data,"searching...");            
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }else{
      axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(res => {
            console.log(res.data,"searching/filter...");
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }

  }, [selectedCategory, searchInput]);
   
  // console.log(products);

 

  
  return (
    <div >

     {/* navbar for product */}
      <div className={styles.navbar}>
              <div>
                  <label className={styles.label}>Filter by Category:</label>
                  <select className={styles.filtertag}
                  value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
                    <option value="">All</option>
                    
                      <option value={"electronics"}>Electronics</option>
                      <option value={"jewelery"}>Jewelery</option>
                      <option  value={"men's clothing"}>Men's clothing</option>
                      <option  value={"women's clothing"}>Women's clothing</option>
                  
                  </select>
              </div>

              <div>
                  <label className={styles.label} >Search by Product:</label>
                  <input disabled={true}
                  className={styles.filtertag}
                  type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search by name" />
              </div>
      </div>
     

     {/* pieChart */}
     <div className={styles.analysediv}>
       <CategoryModal />
     </div>

      {/* //product data append here */}
      <div className={styles.container}>
     
          {products.map(product => (
          
            <Card 
            key={product.id}
            src={product.image} alt={product.title}
            category={product.category}
            title={product.title.length > 20 ?
              <p>{product.title.substring(0, 20)}</p>
              : <p>{product.title}</p>
            }
            descriptions =
             {  product.description.length > 150 ?
                <p>{product.description.substring(0, 150)}... <button
                  className={styles.readMore}
                  onClick={() => handleReadMoreClick(product)}>Read More</button>
                </p>
                : <p>{product.description}</p>
             }
            price={product.price}
            count={product.rating.count}
            rate={product.rating.rate}
              />
          ))}
          
           {showModal && (
                  <div className={styles.modal_overlay}>
                    <div className={styles.modal_overlay}>
                      <h3>{selectedProduct.name}</h3>
                      <p>{selectedProduct.description}</p><br />
                      <button onClick={closeModal}>❌</button>
                    </div>
                  </div>
            )}

      </div>
     


    </div>
  );
}

export default ProductList;
