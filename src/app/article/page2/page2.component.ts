import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'his-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrls: ['../article.component.css']
})
export class Page2Component {
  public name:string = "主要內容";
  public componentName: string = "元件 + 樣板 + 樣式";
  public englishName: string = "ArticleComponent";
}
