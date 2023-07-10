import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AsideComponent } from "./aside/aside.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HeaderComponent, AsideComponent, RouterOutlet]
})
export class AppComponent {
  private title: string = 'angular-play-ground';
}

