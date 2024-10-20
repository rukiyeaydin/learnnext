import { notFound } from "next/navigation";

const ProductId = ( {params}:
    {params: {productId: string}}
 ) => {
    if (parseInt(params.productId) > 1000) {
        notFound();
    }
    return ( 
        <div>
            ProductId: {params.productId}
        </div>
     );
}
 
export default ProductId;