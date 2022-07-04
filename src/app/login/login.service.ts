import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from './user';
import { ConfirmationDialogService } from '../modules/shared/confirmation-dialog/confirmation-dialog.service';
import { HttpService } from '../modules/core/http/http.service';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    userFirstTime: any;
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    public get userValue(): User {
        return this.userSubject.value;
    }


    constructor(
        private router: Router,private httpService: HttpService,
        private http: HttpClient, private confirmationDialogService: ConfirmationDialogService,
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

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Private-Network": "true",
            "Access-Control-Allow-Origin": "true",
        }
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };

        return this.http.post<User>(`${environment.apiUrl}/user/login`, requestBody, requestOptions)
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                let dataDTO = {
                    userId: user?.responseObject?.userdetailDTO?.loginId,
                    userName: user?.responseObject?.userdetailDTO?.userId
                }
                localStorage.setItem('dataAccessDTO', JSON.stringify(dataDTO));
                this.userSubject.next(user);
                console.log("**********************", user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.clear();
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }

    reset(password) {
        let requestBody = {
            userId: this.userFirstTime?.responseObject.userdetailDTO.userId,
            newPassword: password
        };
        return this.http.post(`${environment.apiUrl}user/resetPassword`, requestBody);
    }
}