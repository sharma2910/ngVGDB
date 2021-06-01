import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "x-rapidapi-key": "01d1b858e5mshe4b8443bebcd2d4p1a4235jsn957d74918590",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
            },
            setParams: {
                key: '2bd6d6c871d246ae8993192b4e104257'
            }
        });

        return next.handle(req);
    }
}