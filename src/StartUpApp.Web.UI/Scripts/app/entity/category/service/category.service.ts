import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { BaseService } from "../../base/base.service";

import { Category } from "../model/category.model";

@Injectable()
export class CategoryService extends BaseService<Category>{
    constructor(public http: Http) {
        super(http);
        this.apiUrl = "api/category";
    }
}