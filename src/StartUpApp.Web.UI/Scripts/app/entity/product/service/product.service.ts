import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { BaseService } from "../../base/base.service";

import { Product } from "../model/product.model";

@Injectable()
export class ProductService extends BaseService<Product>{
    constructor(public http: Http) {
        super(http);
        this.apiUrl = "api/product";
    }
}