import { Injectable } from "@angular/core";

import { UserAccount } from '../models/user-account.model'
import { environment } from '../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { UserAccountGrid } from '../models/user-grid.model';
import { UserRegistration } from '../models/user-registration.model';

@Injectable()
export class UserService { 
    constructor(private http: HttpClient) { }

    getAllUserAccounts() {
        return this.http.get<UserAccountGrid>(`${environment.API_URL}/accounts/GetAllUsers`);
    }
    createNewUserAccount(userAccount: UserRegistration) {
      return this.http.post(`${environment.API_URL}/accounts/CreateUserAccount`, userAccount);
    }

    updateUserIdentity(userAccount: UserAccount) {
      return this.http.put(`${environment.API_URL}/accounts/UpdateUserIdentity`, userAccount)
    }

    deleteUserIdentity(userId: number) {
      return this.http.delete(`${environment.API_URL}/accounts/RemoveUserIdentity/` + userId)
    }
}