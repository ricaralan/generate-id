/**
* This module help to generate ids
*
* @author Alan Olivares
* @version 1.4.1
*/
module.exports = function () {

  function addToArrayAlphabetUpperCase(array) {
    try{
      for(var j = 65; j < 91; j++) {
        array.push(String.fromCharCode(j));
      }
    }catch(e) {
      console.log(e);
    }
  };

  function addToArrayAlphabetDownCase(array) {
    try{
      for(var j = 97; j < 123; j++) {
        array.push(String.fromCharCode(j));
      }
    }catch(e) {
      console.log(e);
    }
  };

  function addToArrayNaturalNumbers(array) {
    try{
      for(var i = 0; i <=9; i++) {
        array.push(i);
      }
    }catch(e) {
      console.log(e);
    }
  };

  function getRandomNumer(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function getArrayGenerate(options) {
    array = [];
    if(options && options instanceof Object) {
      for(i in options) {
        if(options[i] === "down") {addToArrayAlphabetDownCase(array)}
        if(options[i] === "upper") {addToArrayAlphabetUpperCase(array)}
        if(options[i] === "numbers") {addToArrayNaturalNumbers(array)}
      }
    } else {
      addToArrayAlphabetDownCase(array);
      addToArrayAlphabetUpperCase(array);
      addToArrayNaturalNumbers(array);
    }
    return array;
  }

  function getWordAdd(word, options) {
    if(options && options.add) {
      word  = (options.add.before) ? options.add.before + word : word;
      word += (options.add.after)  ? options.add.after : "";
    }
    return word;
  }

  function getRequiredLength(options){
    return (options instanceof Object && options.length) ? options.length : options;
  }

  this.generate = function(options) {
    var letters = getArrayGenerate(options.include);
    requiredLength = getRequiredLength(options);
    word = "";
    for(var i = 0; i < requiredLength; i++) {
      word += letters[getRandomNumer(0, letters.length -1)];
    }

    return getWordAdd(word, (options instanceof Object) ? options : null );
  };

}
