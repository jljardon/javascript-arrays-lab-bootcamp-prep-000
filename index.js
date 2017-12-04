const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newKittensArray = [...kittens,name]
  return newKittensArray
}

function prependKitten(name){
  var newKittensArray = [name,...kittens]
  return newKittensArray
}

function removeLastKitten(){
  var newKittensArray = array.slice(0, array.length - 1)
  return newKittensArray
}
