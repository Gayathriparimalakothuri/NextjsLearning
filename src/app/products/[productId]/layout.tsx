export default function ProductDetailsLayout ({
    children
}:{
    children: React.ReactNode
}){
    return(
        <>
            <header style={{
                backgroundColor:"dimgrey",
                fontFamily:"cursive"
            }}>
                Product header
            </header>
            {children}
            <h2>Features Products</h2>
        </>
    )
}