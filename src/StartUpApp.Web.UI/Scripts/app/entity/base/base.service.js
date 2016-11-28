System.register(['@angular/core', "@angular/http", 'rxjs/add/operator/toPromise', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var BaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            BaseService = (function () {
                function BaseService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.apiUrl = ''; // URL to web api
                }
                BaseService.prototype.getAll = function (pageSize, pageNumber) {
                    var result = this.http.get(this.apiUrl + "/getAll/" + pageSize + "/" + pageNumber).map(function (response) { return response.json(); });
                    return result;
                };
                BaseService.prototype.save = function (newEntity) {
                    var body = JSON.stringify(newEntity);
                    var headers = new http_1.Headers();
                    headers.append("Content-type", "application/json");
                    var result = this.http.post(this.apiUrl + "/SaveOrUpdate", body, {
                        headers: headers
                    }).map(function (response) { return response.json(); });
                    ;
                    return result;
                };
                BaseService.prototype.delete = function (id) {
                    var result = this.http.delete(this.apiUrl + "/delete/" + id).map(function (response) { return response.json(); });
                    return result;
                };
                BaseService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                BaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BaseService);
                return BaseService;
            }());
            exports_1("BaseService", BaseService);
        }
    }
});
