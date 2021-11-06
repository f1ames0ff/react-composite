import {catchError, from, Observable, of} from "rxjs";

interface RequestOptions<T = unknown> {
    headers?: Headers;
    params?: URLSearchParams;
    body?: T
}

const service = new class HttpService {
    getHostAddress(): string {
        const {hostname, port, protocol} = window.location;

        // return `${ protocol }//${ hostname }:${ port }`;
        return process.env.REACT_APP_SERVER_ADDRESS as string;
    }

    get<T>(url: string, options: RequestOptions): Observable<T> {
        let assembledUrl :string;

        if(options.params) {
            assembledUrl = this.assembleUrl(url, options.params);
        }

        const request = new Request(url, {
            method: 'GET',
            headers: options.headers ?? {}
        });

        return from(fetch(request))
            .pipe(catchError(error => of(error)));
    }

    private assembleRequest(url: string, options: RequestInit): Request{
        return new Request(url, {
            ...options,
            headers: options.headers ?? {}
        });
    }

    private assembleUrl(url: string, params: URLSearchParams):string{
        return `${url}?${params.toString()}`;
    }
}

export {service as httpService};
