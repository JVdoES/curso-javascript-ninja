(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );
person = {
  name: 'João Vitor',
  lastname: 'Freitas',
  age: 17
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
books.push({name: 'HTML', pages: 300}, {name: 'CSS', pages: 350}, {name: 'JavaScript', pages: 400});

/*
Mostre no console todos os livros.
*/
console.log(books)

/*
Remova o último livro, e mostre-o no console.
*/
  console.log( '\nLivro que está sendo removido:' );
books.pop()


/*
Mostre no console os livros restantes.
*/
// ?
  console.log( '\nAgora sobraram somente os livros:' );
  console.log(books);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
console.log(JSON.stringify(books));

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
JSON.parse(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
console.log(books)

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );
myName = [J,O,A,O];
/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''));



/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log( '\nMeu nome invertido é:' );
  myName.reverse();


/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log( '\nAgora em ordem alfabética:' );
  myName.sort();
})();
