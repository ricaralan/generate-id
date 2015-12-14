/**
* This module help to generate ids
*
* @author Alan Olivares
* @version 2.0.1
*/

'use strict'

var GenerateId = function() {
  this._toGenerate = {
    down    : "abcdefghijklmnopqrstuvwxyz",
    upper   : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers : "0123456789"
  };
};

/**
* generate() generates a random IDs
*
* @param  {JSON | String} optionsIn
* @return {String} generated id
*/
GenerateId.prototype.generate = function(optionsIn) {
  var optionsGenerate = this._getArrayToGenerate(optionsIn.include);
  var requiredLength = this._getRequiredLength(optionsIn);
  var word = "";
  var keys = null;
  var option = null;

  for(var i = 0; i < requiredLength; i++) {
    keys = Object.keys(optionsGenerate);
    option = optionsGenerate[keys[this._getRandom(0, keys.length )]];
    word += option[this._getRandom(0, option.length -1)];
  }

  return this._getWordAdd(word, (optionsIn instanceof Object) ? optionsIn : null );
};

GenerateId.prototype._getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

GenerateId.prototype._getArrayToGenerate = function(options) {
  if(options && options instanceof Object && options.length) {
    var array = [];
    var i = null;
    
    for(i in options) {
      if(this._toGenerate[options[i]]) {
        array.push(this._toGenerate[options[i]]);
      }
    }

    return array;
  }

  return this._toGenerate;
}

GenerateId.prototype._getWordAdd = function(word, options) {
  if(options && options.add) {
    word  = (options.add.before) ? options.add.before + word : word;
    word += (options.add.after)  ? options.add.after : "";
  }

  return word;
}

GenerateId.prototype._getRequiredLength = function(options){
  return (options instanceof Object && options.length) ? options.length : options;
}

module.exports = GenerateId;
