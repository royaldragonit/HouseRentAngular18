import { Component } from '@angular/core';
import { navItems } from './_nav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AdminDashboard';
  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
  onScrollbarUpdate($event: any) {
    // if ($event.verticalUsed) {
    // console.log('verticalUsed', $event.verticalUsed);
    // }
  }
}
