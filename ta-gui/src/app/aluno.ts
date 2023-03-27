export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  github: string;
  metas: Map<string,string>;

  constructor() {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.github = "";
    this.metas = new Map<string,string>();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = new Map<string,string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): Map<string,string> {
    var metas: Map<string,string> = new Map<string,string>();
    for (let [key, meta] of this.metas.entries()) {
      metas.set(key, meta);
    }
    return metas;
  }
}
