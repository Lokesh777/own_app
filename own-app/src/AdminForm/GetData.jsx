import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../Api/Api";
import Card from "./card/Card";
import styles from "./Admin.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const init = {
  name: "",
  category: "",
  description: "",
  brand: "",
  price: "",
  images: "",
  rating: "",
}

export default function GetData() {
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updateFormValues, setUpdateFormValues] = useState(init);
const [open, setOpen] = useState(false);

  useEffect(() => {
    const getdataProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`, product);
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getdataProduct();
  }, []);

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



  const handleUpdate = async (productId) => {
    try {
      await axios.put(`${API_URL}/products/${productId}`, updateFormValues);
      const updatedProducts = product.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            ...updateFormValues,
          };
        }
        return product;
      });
      setProduct(updatedProducts);
      console.log("Product updated successfully");
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReadMoreClick = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleUpdateFormChange = (event) => {
    setUpdateFormValues({
      ...updateFormValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={styles.mainContainerr}>
      <h1>All Created Products</h1>
      <div className={styles.container}>
        {product.map((ele) => (
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

              edit={<ModeEditIcon 
                   onClick={() =>{
                     handleUpdate(ele._id)
                    setShowModal(true)
                  }
                  }
                />}

              deleteicon={<DeleteIcon 
                onClick={()=>handleDelete(ele._id)}
                sx={{color:"orangered"}} />  }
                
              brand={<button  className={styles.readMore}>
              {ele.brand}
              </button>}
              rate={ele.rating}   
             />
        ))}
      </div>

      {/* //readmore details  */}
            {open && (
                  <div className={styles.modal_overlay}>
                    <div className={styles.modal_content} >
                      <h3>{selectedProduct.name}</h3>
                      <p>{selectedProduct.description}</p><br />
                    </div>
                      <button onClick={closePopup}>❌</button>
                  </div>
            )}

{/* update the details  */}
      {/* <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <div className={styles.modalContent}>
            <div>
              <img src={selectedProduct?.images} alt={selectedProduct?.name} />
            </div>
            <div>
              <p>Category: {selectedProduct?.category}</p>
              <p>Brand: {selectedProduct?.brand}</p>
              <p>Description: {selectedProduct?.description}</p>
              <p>Price: ${selectedProduct?.price}</p>
              <p>Rating: {selectedProduct?.rating}</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Close</Button>
        </DialogActions>
      </Dialog> */}

      <Dialog open={showModal} onClose={closeModal}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={updateFormValues.name}
            onChange={handleUpdateFormChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Category"
            name="category"
            value={updateFormValues.category}
            onChange={handleUpdateFormChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={updateFormValues.description}
            onChange={handleUpdateFormChange}
            fullWidth
            margin="normal"
          />
          <TextField
            margin="dense"
            label="Brand"
            type="text"
            fullWidth
            name="brand"
            value={updateFormValues.brand}
            onChange={handleUpdateFormChange}
          />
          <TextField
            margin="dense"
            label="Price"
            type="text"
            fullWidth
            name="price"
            value={updateFormValues.price}
            onChange={handleUpdateFormChange}
          />

          <TextField
            margin="dense"
            label="Images"
            type="text"
            fullWidth
            name="images"
            value={updateFormValues.images}
            onChange={handleUpdateFormChange}
          />
          <TextField
            margin="dense"
            label="Rating"
            type="number"
            name="rating"
            fullWidth
            value={updateFormValues.rating}
            onChange={handleUpdateFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            onClick={() => handleUpdate(selectedProduct?._id)}
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>


    </div>
  );
}