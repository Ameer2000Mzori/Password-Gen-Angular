import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-password-gen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-gen.component.html',
  styleUrl: './password-gen.component.scss',
})
export class PasswordGenComponent {
  length: any;
  letters: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;
}
