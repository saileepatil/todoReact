import React, { useEffect, useState } from 'react';
import CardShop from '../Shop/CardShop'
import axios from 'axios';

export default function ProShop() {

    const [productData, setProductData] = useState({
        Product:[]
    })

    const [productName, setProductName] = useState("")
    const [filteredProduct,setFilteredProducts] = useState([])

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
setProductData({Product : res.data.products})

        })
    },[])

    const addProduct= (e) =>{
setProductName(e.target.value);

    }

    useEffect(()=>{
let filtered = productData.Product.filter((data,idx)=>{
if(data.title.toLowerCase().includes(productName.toLowerCase()) == true){
return true
}

})
setFilteredProducts(filtered);


    },[productName])
  return (
    <div>
        <h1>Product-Card </h1>

        <input placeholder='search your product here....'
        type='text'
        onChange={addProduct}
        value={productName}
        />

        <div className="row row-cols-1 row-cols-sm-2  row-cols-md-3  row-cols-lg-4 g-4">
{filteredProduct.length > 0 ?
    filteredProduct.map((pro,idx)=>{
 return  <div className="col">
    <div className="card h-100">
      <img src={pro.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{pro.title}</h5>
        <p className="card-text">{pro.price}</p>
        <p className="card-text">{pro.description}</p>

      </div>
    </div>
  </div>
    }):

       productData.Product.map((pro,idx)=>{
 return  <div className="col">
    <div className="card h-100">
      <img src={pro.thumbnail} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{pro.title}</h5>
        <p className="card-text">{pro.price}</p>
        <p className="card-text">{pro.description}</p>

      </div>
    </div>
  </div>
    })
}
 
</div>
    </div>
  )
}


