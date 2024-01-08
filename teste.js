const enderecos = [
  {
    name: 'Junior',
    age: 14,
    gender: 'masculino',
  },
  {
    name: 'Manoel',
    age: 27,
    gender: 'masculino',
  },
  {
    name: 'MAria',
    age: 48,
    gender: 'feminino',
  },
  {
    name: 'Joana',
    age: 17,
    gender: 'feminino',
  },
  {
    name: 'João',
    age: 22,
    gender: 'masculino',
  },
]
// console.log(enderecos.filter((endereco) => endereco.age < 25))
// [0 1 2 3 4]

// 0
for (let i = 0; i < enderecos.length; i++) {
  console.log(`REPETIÇÃO NUMERO ${i}`)
  console.log(enderecos[i].age)
}
