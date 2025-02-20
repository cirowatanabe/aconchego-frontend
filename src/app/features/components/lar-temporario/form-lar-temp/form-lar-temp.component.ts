import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-lar-temp',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-lar-temp.component.html',
  styleUrl: './form-lar-temp.component.css'
})
export class FormLarTempComponent {
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    nacionalidade: new FormControl('', {
      validators: [Validators.required]
    }),
    nascimento: new FormControl('', {
      validators: [Validators.required]
    }),
    cep: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(8), Validators.minLength(8)]
    }),
    rua: new FormControl('', {
      validators: [Validators.required]
    }),
    numero: new FormControl('', {
      validators: [Validators.required]
    }),
    complemento: new FormControl('', {
      validators: [Validators.required]
    }),
  });

  limparFormulario() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.valid) {
    }
    console.log(this.form);
  }
}
