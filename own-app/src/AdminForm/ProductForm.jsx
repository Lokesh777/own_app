import { useState } from "react";
import axios from "axios";
import { API_URL } from "../Api/Api";
import styles from "./Admin.module.css";

const categories = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "mens",
    label: "Men's Fashion",
  },
  {
    value: "womans",
    label: "Woman's Fashion",
  },
  {
    value: "jwellery",
    label: "Jwellery",
  },
  {
    value: "others",
    label: "Others",
  },
];

const AdminForm = () => {
  const [product, setProduct] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/products`, product);
      setProduct(response.data)
      console.log("response:", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.containerAdmin} >
        <div className={styles.boxDiv} >
          <form onSubmit={handleSubmit}>
            <h1 className={styles.Heading1} >PRODUCT GENERATOR</h1>

            <div className={styles.inputDiv1} >

                <div className={styles.inputRowDiv} >
                  <input style={{ width: '100%' }} 
                   placeholder="Product Name"
                   type="text" name="name" value={product.name || ""} onChange={handleChange} />
                </div>
              
                <div className={styles.inputRowDiv} >
                    <input style={{ width: '100%' }} 
                    placeholder="Brand name"
                    type="text" name="brand" value={product.brand || ""} onChange={handleChange} />
                </div>

            </div>

            <div className={styles.inputDiv1} >
               <div className={styles.inputRowDiv}>
                  <input style={{ width: '100%' }}
                  placeholder="Product Price"
                  type="number" name="price" value={product.price || ""} onChange={handleChange} />
               </div>

                <div className={styles.inputRowDiv}>
                  <input style={{ width: '100%' }} 
                  placeholder="Product Ratings"
                  type="number" name="rating" value={product.rating || ""} onChange={handleChange} />
                </div>
            </div>

            <div className={styles.inputDiv1} >
              <textarea name="description" 
                placeholder= "Product Description"
                style={{ width: '100%' }}
                value={product.description || ""}
                onChange={handleChange} />
            </div>

            <div className={styles.inputDiv1} >
              <div className={styles.inputRowDiv}>
                  <select 
                  
                  style={{ width: '100%' }}
                     name="category"
                     placeholder="Category"
                     value={product.category || ""}
                     onChange={handleChange}>

                    <option value="">Select category</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.label}>
                        {category.label}
                      </option>
                    ))}
                  </select>
              </div>

              <div className={styles.inputRowDiv}>
                   <input type="text" name="images"
                    placeholder="Product Image Url..."
                    style={{ width: '100%' }} 
                    value={product.images || ""} 
                    onChange={handleChange} />
              </div>

            </div>

            <button className={styles.buttons} style={{ width: '100%' }} type="submit">Submit</button>
          </form>
        </div>
    </div>
  );
};

export default AdminForm;
