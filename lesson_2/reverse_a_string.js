function reverse(string) {
  return string.split('').reverse().join('');
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"