import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';

@Component({
  selector: 'adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.css'],
})
export class AdicionarContatoComponent implements OnInit {
  listaContatos: Contato[] = [];

  constructor() {}

  ngOnInit(): void {}

  adicionar(
    event: Event,
    nome: string,
    email: string,
    telefone: string,
    aniversario: string
  ): void {
    event.preventDefault();

    let aniversarioContato = this.formatarAniversario(aniversario);

    const novoContato = new Contato(nome, email, telefone, aniversarioContato);

    this.listaContatos.push(novoContato);

    const form = document.querySelector('#form') as HTMLFormElement;

    form.reset();
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
