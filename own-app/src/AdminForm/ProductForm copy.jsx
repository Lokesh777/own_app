import { Box,TextField,MenuItem,Button,FormControl,InputLabel,Select } from "@mui/material";
import styles from "./Admin.module.css";
import { useState,useEffect } from "react";
import { API_URL } from "../Api/Api";
import axios from "axios";

const categories = [
    {
      value: 'electronics',
      label: 'Electronics',
    },
    {
      value: 'mens',
      label: 'Mens Fashion',
    },
    {
      value: 'womans',
      label: 'Womans Fashion',
    },
    {
      value: 'jwellery',
      label: 'Jwellery',
    },
    {
      value: 'others',
      label: 'Others',
    },
  ];

  const initialState = {
    name:"",
    description:"",
    brand:"",
    category:"",
    price:"",
    images:"",
    rating:"",
}
// name,description,brand,category,price,images,rating

export default function AdminForm(){
    const [products,setProducts] = useState(initialState)
 
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${API_URL}/products`, products);
          console.log("I am active",res);            
            // alert(res.data.message);    
        } catch (err) {
                console.log(err.message);
        }
      };

    // useEffect(() => {
    //   console.log('Data being posted:', products);
    // }, [products]);
  


    const handleChange = (e) =>{
      const {name,value} = e.target;
      setProducts({...products,[name]: value })
    }
    // console.log(products,"Product catched by form");
    
    return (
        <div className={styles.containerAdmin}>
                <div className={styles.boxDiv} >
                    <form onSubmit={handleSubmit}>
                        <Box 
                        component="form"
                        sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >

                        <h1 className={styles.Heading1}  >PRODUCT GENERATOR</h1>

                        <Box className={styles.inputDiv1} >
                                <TextField
                                   value={products.name}
                                   onChange={handleChange}
                                   style={{ width: '100%' }}                              
                                    variant="outlined"
                                    label="Product Name"
                                    type="name"
                                    name="name"                  
                                    />
                                <TextField
                                   value={products.brand}
                                   onChange={handleChange}
                                   style={{ width: '100%' }}
                                    variant="outlined"
                                    label="Brand Name"
                                    type="brand"
                                    name="brand"                  
                                    />

                        </Box>

                        <Box className={styles.inputDiv1} >
                                <TextField
                                   value={products.price}
                                   onChange={handleChange}
                                   style={{ width: '100%' }}
                                    variant="outlined"
                                    label="Product Price"
                                    type="price"
                                    name="price"                  
                                    />
                                <TextField
                                   value={products.rating}
                                   onChange={handleChange}
                                   style={{ width: '100%' }}
                                    variant="outlined"
                                    label="Product ratings"
                                    type="rating"
                                    name="rating"                  
                                    />

                        </Box>
                            
                        <Box className={styles.inputDiv1} >
                                <TextField
                                    value={products.description}
                                    onChange={handleChange}
                                    id="outlined-multiline-static"
                                    label="Product Descriptions"
                                    name="description"
                                    multiline
                                    rows={4}
                                    style={{ width: '100%' }}
                                    // minRows={3}
                                    />
                        </Box>
                            

                         <Box className={styles.inputDiv1} >
                            
                                {/* <TextField
                                value={products.category}
                                onChange={handleChange}
                                name="category"
                                 style={{ width: '100%' }}
                                id="outlined-select-currency"
                                select
                                label="Category"
                                helperText="Please select your Category"
                                >
                                {categories.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField> */}

                              <FormControl sx={{ m: 1, minWidth: 225 }}>
                                     <InputLabel>Category</InputLabel>
                                      <Select 
                                        variant="outlined"
                                        label="category"
                                        value={products.category}
                                        onChange={handleChange}
                                        name="category"
                                        defaultValue=""
                                      >
                                        {categories.map((option) => (
                                              <MenuItem key={option.value} value={option.value}>
                                              {option.label}
                                              </MenuItem>
                                          ))}
                                      </Select>
                               </FormControl>

                                <TextField
                                    value={products.images}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                    variant="outlined"
                                    label="Product Image Url"
                                    type="url"
                                    name="images"                  
                                    />

                         </Box>

                          
                        
                        <Box className={styles.inputDiv1} >
                            <Button
                            style={{ width: '100%' }}
                            variant="contained" 
                            sx={{ backgroundColor:"orangered",
                            fontWeight:"bold"}} 
                            type="submit"
                            >Submit</Button>   
                        </Box>
                        
                        </Box>
                    </form>
                </div>
        </div>

    )
}