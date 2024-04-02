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
  length: number = 8;
  letters: boolean = false;
  numbers: boolean = false;
  symbols: boolean = false;

  password: string | number = 'test password';

  generatePassword() {
    console.log('length: ', this.length);
    console.log('letters: ', this.letters);
    console.log('numbers: ', this.numbers);
    console.log('symbols: ', this.symbols);
    console.log('password: ', this.password);

    this.password = this.length;
  }
}
