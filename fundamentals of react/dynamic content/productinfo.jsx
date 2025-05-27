const ProductInfo=()=>{
    const Product={
        name:"Laptop",
        price:"$1300",
        company:"Lenovo"
    }
    return(
        <div>
            <h1>Product Name:{Product.name}</h1>
            <h2>Price:{Product.price}</h2>
            <h3>Company:{Product.company}</h3>
        </div>
    )
}
export default ProductInfo;