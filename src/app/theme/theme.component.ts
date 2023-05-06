import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  select: string = 'blue';

  onFilter() {
    document.documentElement.setAttribute('data-theme', this.select)
  }
}
