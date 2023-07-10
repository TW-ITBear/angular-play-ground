import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'his-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public name: string = "header";
  public componentName: string = "頁首元件 + 樣板 + 樣式";
  public englishName: string = "HeaderComponent";
}
