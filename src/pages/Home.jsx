import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Home() {
  const [products, setProducts] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  function buyNow(item){
    console.log(item);
    navigate(`Singlepage/${item.id}`)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 p-5 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4">
        {products ? products.map((item) => (
          <div key={item.id} className="card bg-base-100 shadow-xl flex flex-col">
            <figure className="flex-shrink-0">
              <img
                className="w-full h-48 object-cover p-2 rounded-t-[20px]"
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div className="card-body flex-1 flex flex-col">
              <h2 className="card-title text-lg font-semibold p-2">{item.title}</h2>
              <p className="flex-1 p-2">{item.description}</p>
              <div className="card-actions mt-4 flex justify-end">
                <button className="btn w-full p-3 bg-blue-500 text-white" onClick={()=>buyNow(item)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )) : <h1>Loading...</h1>}
      </div>
    </>
  );
}

export default Home