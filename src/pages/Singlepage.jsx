import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Singlepage() {

    const [singleUser,setSingleUser] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setSingleUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    function backPurchase(){
        window.history.back()
    }
    return (
        <div className="flex justify-center items-center h-screen p-4">
    <div className="card bg-base-100 shadow-xl flex flex-col max-w-sm w-full">
        {singleUser ? (
            <>
                <figure className="flex-shrink-0">
                    <img
                        className="w-full h-48 object-cover p-2 rounded-t-[20px]"
                        src={singleUser.image}
                        alt={singleUser.title}
                    />
                </figure>
                <div className="card-body flex-1 flex flex-col">
                    <h2 className="card-title text-lg font-semibold p-2">{singleUser.title}</h2>
                    <p className="flex-1 p-2">{singleUser.description}</p>
                    <div className="card-actions mt-4 flex justify-end">
                    <button className="btn w-full p-3 bg-blue-500 text-white" onClick={backPurchase}>Back to purchase
                </button>
                    </div>
                </div>
            </>
        ) : (
            <h1>Loading...</h1>
        )}
    </div>
</div>
    )
}

export default Singlepage