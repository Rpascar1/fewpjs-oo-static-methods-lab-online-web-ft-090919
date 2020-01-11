class Formatter {

static capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}


static sanitize(string){
  return string.replace(/[^a-z0-9-' ]/gi, '')
}


  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}


// reg = \b(?!the|a|an|but|of|and|for|at|by|from)\b\S+/g

// class Formatter {
//
// static capitalize(string){
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
//
//
// static sanitize(string){
//   return string.replace(/[^a-z0-9-' ]/gi, '')
// }
//
// static titleize(string){
//   //let dont = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
//   return string.replace(/\b(?![the|a|an|but|of|and|for|at|by|from])\b\S+/, function(txt){return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
//      });
//  }










// reg = \b(?!the|a|an|but|of|and|for|at|by|from)\b\S+/g
