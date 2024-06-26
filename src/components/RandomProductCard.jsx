import useProducts from "@/hooks/use-product";
import { Card } from "./ui/card";


const RandomProductCard = () => {

    const { products, loading } = useProducts();
    
    if (loading) return <div>Loading...</div>;

    return (
        <div className="container">
            {
                products.map((product) => (
                    <div key={product.id} className="py-4">
                        <Card  className="shadow-md border-none bg-red-600/55">
                            <img src={product.image} alt={product.title}  className='max-w-52 max-h-52' />
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export default RandomProductCard
