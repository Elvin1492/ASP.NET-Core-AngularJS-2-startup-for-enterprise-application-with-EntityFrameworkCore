import { EntityBase } from "../../base/base.entity";

import { Product } from "../../Product/model/Product.model";

export class Category extends EntityBase {
    public Name: string;
    public Products: Product[];
}