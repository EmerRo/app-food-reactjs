import { Toaster,toast } from "sonner"
export const AddProduct = ({ onAddProduct }) => {
    return (
        
        <div className="flex justify-end" >
            
            
            <button onClick={()=> {
                onAddProduct()
               
            }}
            
           
            
            className="btn bg-yellow-400 hover:bg-red-900 rounded-full w-5 h-5 flex items-center justify-center text-lg">
                <span >+</span> </button>
                
                

            <Toaster
            position="button-center"/>
           
        </div>
        
    )
}