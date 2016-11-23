import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';


@Injectable()
export class BaseService<T> {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    public apiUrl = '';  // URL to web api

    constructor(public http: Http) { }

    getAll(pageSize: number, pageNumber: number) {
        let result = this.http.get(this.apiUrl + "/getAll/" + pageSize + "/" + pageNumber).map((response: Response) => response.json());
        return result;
    }

    save(newEntity: T) {
        const body = JSON.stringify(newEntity);
        const headers = new Headers();
        headers.append("Content-type", "application/json");

        var result = this.http.post(this.apiUrl + "/SaveOrUpdate", body,
            {
                headers: headers
            }).map((response: Response) => response.json());;

        return result;
    }

    delete(id: number) {
        var result = this.http.delete(this.apiUrl + "/delete/" + id).map((response: Response) => response.json());
        return result;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}