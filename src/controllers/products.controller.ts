import { Response, Request } from 'express';
import schemaProduct from '../helpers/schema.product';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const { error } = schemaProduct.validate(product);
    
    if (error) {
      if ((error.message).includes('required')) {
        return res.status(400).json({ message: error.message });
      }
      
      return res.status(422).json({ message: error.message });
    }

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductController;