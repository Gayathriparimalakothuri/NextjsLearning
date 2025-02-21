const ProductDetails = ({params}:{
    params:{
        productId:string 
    }
}) =>{
    return(
        <>
            <p> Welcome to Product Details of Id {params.productId}</p>
        </>
    )
}

export default ProductDetails