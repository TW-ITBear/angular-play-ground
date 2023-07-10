import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'his-aside',
  standalone: true,
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  imports: [RouterLink]
})
export class AsideComponent {
  public name:string = "子選單";
  public componentName: string = "元件 + 樣板 + 樣式";
  public englishName: string = "AsideComponent";

}
