import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [cart, setCart] = useState([])
    
    const addCart = (item) => {       
         setCart((prev)=>{
            const existingCart = prev.find((p)=> p.id === item.id);

            if(existingCart){
                return prev.map((p)=> p.id === item.id ? {...p, quantity:p.quantity+1}:p)
            }else{
                return [...prev, {...item, quantity: 1}]
            }
        })
        toast.success("cart added")
    }

    console.log(cart);
    
    const increaseQTY = (id) =>{
        console.log(id);
        
        setCart((prev)=>
            prev.map((p)=>p.id == id ? {...p,quantity:p.quantity+1}:p)
        )
    }

    const decreaseQTY = (id) =>{
        console.log(id);
        
        setCart((prev)=>
            prev.map((p)=>p.id === id ? {...p,quantity:p.quantity-1}:p)
        )
    }

  const itemDelete = (i) =>{
    let newArr = [...cart]
    newArr.splice(i,1)
    setCart(newArr)
    
  }

    return(
        <UserContext.Provider  value={{addCart,cart,itemDelete,increaseQTY,decreaseQTY}}>
            {children}
        </UserContext.Provider>
    )
}