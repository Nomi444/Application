import {products} from '../../Data/product';

const getVisibleProducts= (link) => {
    
    return (
      
    products.filter(p => p.link === link)
      
    );
} 
const getVisibleProductsbyId= (id) => {
  
  return (
    

  products.filter(p => p.id === id)
    
  );
} 

const getProductByLink = (link) => {
  let array = products.filter(product => product.link === link)
  return array.length > 0 ? array[0] : null;
}

export default {getVisibleProducts,getVisibleProductsbyId, getProductByLink} ;