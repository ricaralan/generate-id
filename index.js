/**
* This module help to generate ids
*
* @author Alan Olivares
* @version 1.6.1
*/
module.exports = function () {

  var toGenerate = {
    down    : "abcdefghijklmnopqrstuvwxyz",
    upper   : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers : "0123456789"
  };

  this.generate = function(optionsIn) {
    var optionsGenerate = getArrayToGenerate(optionsIn.include);
    requiredLength = getRequiredLength(optionsIn);
    word = "";
    for(var i = 0; i < requiredLength; i++) {
      keys = Object.keys(optionsGenerate);
      option = optionsGenerate[keys[getRandom(0, keys.length )]];
      word += option[getRandom(0, option.length -1)];
    }
    return getWordAdd(word, (optionsIn instanceof Object) ? optionsIn : null );
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function getArrayToGenerate(options) {
    if(options && options instanceof Object && options.length > 0) {
      array = [];
      for(i in options) {
        if(toGenerate[options[i]]) {
          array.push(toGenerate[options[i]]);
        }
      }
      return array;
    }
    return toGenerate;
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

}
