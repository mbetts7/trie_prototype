Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){
  if(!index) { 
    index = 0;
  }
  var letter = word[index];
  if(letter === undefined) {
    this.isWord = true;
  }
  else if (this.characters[letter]) {
    index ++;
    this.characters[letter].learn(word, index);
  }
  else {
    this.characters[letter] = new Trie();
    index ++;
    this.characters[letter].learn(word, index);
  }

  // This function should add the given word, starting from the given index, to this Trie
  // It is recursive.
  // It will tell the correct child of this Trie to learn the word starting from a later index
  // A word does not necessarily end at a leaf.
  // You must mark nodes which are the ends of words, so that the words can be reconstructed later.
};

Trie.prototype.getWords = function(words, currentWord){
  // if( this.characters === {}) {
  //   return words;
  // } else {
    for (var letter in this.characters) {
      if (this.characters[letter].isWord) {
        currentWord += letter;
        words.push(currentWord);
        words.push(this.characters[letter].getWords(words, currentWord)); 
      }
      else {
        currentWord += letter;
        words.push(this.characters[letter].getWords(words, currentWord)); 
      }
    }
  return words;
  // This function will return all the words which are contained in this Trie
  // it will use currentWord as a prefix, since a Trie doesn't know about its parents.
};

Trie.prototype.find = function(word, index){
  if(!index) { 
    index = 0;
  }
  var letter = word[index];
  if(!letter && this.isWord) {
    return this;
  }
  else if (this.characters[letter]) {
    index ++;
    return this.characters[letter].find(word, index);
  }
  else {
    return null;
  }

  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.
  // Be sure to consider what happens if the word is not in this Trie.
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions 
  // for a given prefix.
  // It should use find and getWords.
};