import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Product() {

    const [productData,setProductData] = useState({
        Products:[]
    });

    const [productName,setProductName] = useState("");
    const [filteredProduct,setFilteredProducts] = useState([]);

    useEffect(()=>{
        axios.get(' https://dummyjson.com/products').then((res)=>{
            setProductData({Products :res.data.products});
            
        })
    },[])

    useEffect(()=>{
        let filteredProducts = productData.Products.filter((itm,idx)=>{
            if(itm.title.toLowerCase().includes(productName.toLowerCase()) == true){
       return true
            }
            
        })
        setFilteredProducts(filteredProducts);
console.log(filteredProduct);

        
    },[productName])

    const addProduct = (e) =>{
setProductName(e.target.value);

    }

  return (
    <div>
        <h1>Product-Cards</h1>
        <input placeholder='search your product here...'
        type='text'
        onChange={addProduct}
        value={productName}
        />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
 {filteredProduct.length > 0 ?
    filteredProduct.map((data,idx)=>{
return <div className="col">
    <div className="card">
      <img src={data.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  </div>
    }):
     productData.Products.map((data,idx)=>{
return <div className="col">
    <div className="card">
      <img src={data.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    </div>
  </div>
    })
 }
 
</div>
    </div>
  )
}

 