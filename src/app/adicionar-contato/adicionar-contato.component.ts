import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contato } from '../contato';

@Component({
  selector: 'adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.css'],
})
export class AdicionarContatoComponent implements OnInit {
  listaContatos: Contato[] = [];

  form = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required]),
    aniversario: new FormControl(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}

  adicionar(e: Event): void {
    e.preventDefault();

    if (!this.form.valid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    let aniversarioContato = this.formatarAniversario(
      this.form.value.aniversario
    );

    const novoContato = new Contato(
      this.form.value.nome,
      this.form.value.email,
      this.form.value.telefone,
      aniversarioContato
    );

    this.listaContatos = [...this.listaContatos, novoContato];

    this.form.reset();
  }

  formatarAniversario(aniversario: string): string {
    let niverFormatado = aniversario.slice(-5);

    niverFormatado = new Date(niverFormatado).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
    });

    return niverFormatado;
  }
}
