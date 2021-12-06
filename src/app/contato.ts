export class Contato {
  private nome: string;
  private email: string;
  private telefone: string;
  private aniversario: string;

  constructor(
    _nome: string,
    _email: string,
    _telefone: string,
    _aniversario: string
  ) {
    this.nome = _nome;
    this.email = _email;
    this.telefone = _telefone;
    this.aniversario = _aniversario;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(novoNome: string): void {
    this.nome = novoNome;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(novoEmail: string): void {
    this.email = novoEmail;
  }

  getTelefone(): string {
    return this.telefone;
  }

  setTelefone(novoTelefone: string): void {
    this.telefone = novoTelefone;
  }

  getAniversario(): string {
    return this.aniversario;
  }

  setAniversario(novoAniversario: string): void {
    this.aniversario = novoAniversario;
  }
}
