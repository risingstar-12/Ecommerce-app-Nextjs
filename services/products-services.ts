import {ServiceBase} from "./service-base";

export default class ProductsService extends ServiceBase   {

static  async getProducts() {
   const productsResp = await fetch(this.getUrl('/products'));
   const data = await productsResp.json();
   return data.products; // The API returns { products: [...] }
 }
 static getProductById = async (id:number) => {
    const productResp = await fetch(this.getUrl(`/products/${id}`));
   const data = await productResp.json();
   return data;
 }


}