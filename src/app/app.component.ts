import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGenComponent } from './password-gen/password-gen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Password-Gen-Angular';
}
