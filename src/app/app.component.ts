import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'aconchego-das-patas';
  private router = inject(Router);
  showFooter: boolean = true;
  showHeader: boolean = true;

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.showFooter = !(event.url === '/' || event.url === '');
    //   }
    // });
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.showHeader = !(event.url === '/' || event.url === '');
    //   }
    // });
  }
}
