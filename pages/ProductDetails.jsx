import { useParams } from 'react-router-dom'
import products from "../src/data/products.json"

function ProductDetails() {

  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  return (
    <section className="min-h-screen p-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-3xl"
        />

        <div>

          <p className="text-orange-500">
            {product.category}
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-600">
            {product.description}
          </p>

          <h2 className="text-4xl font-bold mt-8">
            ${product.price}
          </h2>

          <button className="bg-orange-500 text-white px-8 py-4 rounded-full mt-8">
            Buy Now
          </button>

        </div>

      </div>

    </section>
  )
}

export default ProductDetails