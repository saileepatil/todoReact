import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {

    const [ProductData,setProductData] = useState({
        products:[]
    })

    const [ProductName,setProductName] = useState("");
    const [filteredProducts , setFilteredProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
setProductData({products:res.data.products});

        })
    },[])

    const addProduct =(e) =>{
setProductName(e.target.value);

    }

    useEffect(()=>{
let filteredProduct = ProductData.products.filter((item,idx)=>{
    if(item.title.toLowerCase().includes(ProductName.toLowerCase() == true)){
return true
    }
    
})
setFilteredProducts(filteredProduct);
console.log(filteredProduct);

    },[ProductName])

  return (
    <div>
       <h1>Products-Card</h1>

       <input placeholder='Enter product name....' 
       type='text'
       onChange={addProduct}
       value={ProductName}
       />
       <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-4">
 
 {filteredProducts.length > 0 ?
    filteredProducts.map((product,idx)=>{
return  <div className="col">
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  </div>
    }):
      ProductData.products.map((product,idx)=>{
return  <div className="col">
    <div className="card h-100">
      <img src={product.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  </div>
    })
 }
 

</div>

    </div>
  )
}

