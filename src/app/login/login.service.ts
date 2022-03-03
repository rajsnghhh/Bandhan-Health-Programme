import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from './user';


@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    public get userValue(): User {
        return this.userSubject.value;
    }


    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }


    login(username, password) {
        let requestBody = {
            deviceType: "W",
            loginId: username,
            password: password
        };
        return this.http.post<User>(`${environment.apiUrl}/user/login`, requestBody)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                let dataDTO = {
                    userId: user.responseObject.userdetailDTO.loginId,
                    userName: user.responseObject.userdetailDTO.userId
                }
                localStorage.setItem('dataAccessDTO', JSON.stringify(dataDTO));
                this.userSubject.next(user);
                console.log("**************************************", user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.clear();
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.responseObject.userdetailDTO.userId) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    // delete(id: string) {
    //     return this.http.delete(`${environment1.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue.userId) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }

}