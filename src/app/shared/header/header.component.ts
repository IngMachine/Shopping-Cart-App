import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  activo: boolean = false;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('auth')
              .subscribe( auth => {
                this.isAuth = auth.isAuthenticated;
                console.log(this.isAuth);
              } );
  }

  getActivo(): boolean {
    return this.activo = true;
  }

  logout(): void{
    this.authService.logout();
  }

}
