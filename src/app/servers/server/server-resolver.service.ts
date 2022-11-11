import { ServersService } from './../servers.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';

interface Serve {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Serve> {
    
    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Serve | Observable<Serve> | Promise<Serve> {
        return this.serversService.getServer(+route.params['id']);
    }

}