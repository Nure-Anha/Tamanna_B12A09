import { toast } from "react-toastify";

const getWishList = () => {
    const getStoredToysSTR = localStorage.getItem("WishListed_Toys") ;

    if(getStoredToysSTR) {
        try{
            const getStoredToysDATA = JSON.parse(getStoredToysSTR) ;

            return Array.isArray (getStoredToysDATA) ? getStoredToysDATA : []
        }
        catch (error) {
      console.error("Error parsing wishlist from localStorage:", error);
      return [];
    }
        

        // return getStoredToysDATA ;
    }
    else {
        return [] ;
    }
}


const addToLS = (obj) => {
    const getAllWishListToys = getWishList() ;

    const alrdyExist = getAllWishListToys.find(i => (obj.toyId === i.toyId)) ;

    if(alrdyExist) {
        toast.error("Already Added") ;
        return ;
    }
        getAllWishListToys.push(obj) ;
        localStorage.setItem("WishListed_Toys", JSON.stringify(getAllWishListToys)) ;
        toast.success("Added to WishList") ;
}



// Remove
const removeFromLS = (toyId) => {

    const getAllWishListToys = getWishList() ;
    const afterRemvList = getAllWishListToys .filter(n => n.toyId !== toyId) ;

    localStorage.setItem("WishListed_Toys" , JSON.stringify(afterRemvList)) ;
    toast.error("Removed from Wishlist!") ;
    return afterRemvList ;
}

export {addToLS , getWishList , removeFromLS} ;
