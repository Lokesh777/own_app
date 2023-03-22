import axios from "axios";
import { useEffect, useState } from "react"
import { API_URL } from "../Api/Api";
import Card from "./card/Card";
import styles from "./Admin.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { Modal, TextField, Button } from "@mui/material";

export default function GetData(){
const [product,setProduct]=useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [open, setOpen] = useState(false);

useEffect(()=>{
    const getdataProduct = async () => {
        try {
          const res = await axios.get(`${API_URL}/products`, product);
           setProduct(res.data)
          console.log(res.data);   
        } catch (err) {
                console.log(err);
        }
      };
      getdataProduct()

},[])
// console.log(product);


const handleDelete = async (productId) => {
  try {
    await axios.delete(`${API_URL}/products/${productId}`);
    const filteredProducts = product.filter(
      (item) => item._id !== productId
    );
    setProduct(filteredProducts);
    console.log("Product deleted successfully");
  } catch (err) {
    console.log(err);
  }
};

// PUT request to update a product
// const handleUpdate = async (productId, updatedProduct) => {
//   try {
//     const response = await axios.put(`${API_URL}/products/${productId}`, updatedProduct);
//     const updatedProducts = product.map((product) => {
//       if (product._id === productId) {
//         return response.data;
//       }
//       return product;
//     });
//     setProduct(updatedProducts);
//     console.log("Product updated successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };

const handleUpdate = (productId) => {
  setSelectedProduct(product.find((item) => item._id === productId));
  handleOpen();
};

const handleUpdateProduct = (updatedProduct) => {
  try {
    axios.put(`${API_URL}/products/${selectedProduct._id}`, updatedProduct);
    const updatedProducts = product.map((product) => {
      if (product._id === selectedProduct._id) {
        return {
          ...product,
          ...updatedProduct,
        };
      }
      return product;
    });
    setProduct(updatedProducts);
    console.log("Product updated successfully");
  } catch (error) {
    console.error(error);
  }
  setShowModal(false);
};
// PATCH request to partially update a product
// const handlePartialUpdate = async (productId, updatedFields) => {
//   try {
//     const response = await axios.patch(`${API_URL}/products/${productId}`, updatedFields);
//     const updatedProducts = products.map((product) => {
//       if (product._id === productId) {
//         return {
//           ...product,
//           ...response.data,
//         };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//     console.log("Product updated successfully");
//   } catch (error) {
//     console.error(error);
//   }
// };


  const handleReadMoreClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
    return (
        <div className={styles.mainContainerr}>
            <h1>All Created Products</h1>
          <div className={styles.container}>
            {
                product?.map((ele)=>
              <Card 
                key={ele._id}
                src={ele.images} alt={ele.name}
                category={ele.category}
                title={ele.name.length > 20 ?
                  <p>{ele.name.substring(0, 20)}</p>
                  : <p>{ele.name}</p>
                }
                descriptions =
                {  ele.description.length > 150 ?
                    <p>{ele.description.substring(0, 150)}... <button
                      className={styles.readMore}
                      onClick={() => handleReadMoreClick(ele)}>Read More</button>
                    </p>
                    : <p>{ele.description}</p>
                }
                price={ele.price}

                edit={    <ModeEditIcon 
                  onClick={() =>
                    handleUpdate(ele._id)}
                  />   }

                deleteicon={<DeleteIcon 
                  onClick={()=>handleDelete(ele._id)}
                  sx={{color:"orangered"}} />  }
                  
                brand={<button  className={styles.readMore}>
                 {ele.brand}
                </button>}
                rate={ele.rating}
                  />
                )
            }

            {showModal && (
                  <div className={styles.modal_overlay}>
                    <div className={styles.modal_content} >
                      <h3>{selectedProduct.name}</h3>
                      <p>{selectedProduct.description}</p><br />
                    </div>
                      <button onClick={closeModal}>❌</button>
                  </div>
            )}

{/* update the data  */}
      <Modal open={open} onClose={handleClose}>
        <div>
          <h2>Edit Product</h2>
          <form>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </form>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </Modal>

          </div>

          
        </div>
    )
}