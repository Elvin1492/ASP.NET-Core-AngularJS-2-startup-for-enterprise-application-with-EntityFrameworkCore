import { EntityBase } from "../../base/base.entity";
import { Category } from "../../category/model/category.model";

export class Product extends EntityBase {
    public Name: string;
    public CategoryId: number;
    public Category: Category;
}