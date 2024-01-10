const alunos = [
  {
    nome: "Wesley",
    nota: 5,
  },
  {
    nome: "Maria",
    nota: 7,
  },
  {
    nome: "João",
    nota: 9.3,
  },
  {
    nome: "Renata",
    nota: 6.2,
  },
  {
    nome: "Julio",
    nota: 5,
  },
];

const alunosMaiorQueSeis = (aluno) => aluno.nota >= 6;
console.log(alunos.filter(alunosMaiorQueSeis));
