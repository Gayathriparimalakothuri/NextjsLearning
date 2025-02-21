const SubCategoryDetails = ({params}:{
    params:{
        productId:string,
        categoryId:string,
        subcategoryId:string
    }
}) =>{
    return (
        <>
            <p>Product Details of {params.productId} of category {params.categoryId} and subcategory {params.subcategoryId}</p>
        </>
    )
}

export default SubCategoryDetails