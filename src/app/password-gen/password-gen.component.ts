import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { generatePassword } from './genPassword';
@Component({
  selector: 'app-password-gen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-gen.component.html',
  styleUrl: './password-gen.component.scss',
})
export class PasswordGenComponent {
  length: number = 8;
  letters: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  password: string | number = 'test password';

  generatePassword() {
    this.password = generatePassword(
      this.length,
      this.letters,
      this.numbers,
      this.symbols
    );
  }
}
