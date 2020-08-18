import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';


@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy{

    isAuthenticated = false;
    private subscription : Subscription;
    
    constructor(private dataService: DataStorageService, private authService:AuthService){}

    ngOnInit(){
        this.subscription = this.authService.user.subscribe(
             (user)=>{
                this.isAuthenticated = user ? true : false;
             }
        );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onLogout(){
        this.authService.logout();
    }

    onSaveData(){
        this.dataService.storeRecipe();
    }

    onFetch(){
        this.dataService.fetchRecipes().subscribe();
    }
}