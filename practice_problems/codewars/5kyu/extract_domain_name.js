"use strict";

// Extract the Domain Name from a URL
// ----------------------------------

/*
Write a function that when given a URL as a string, parses out just the 
domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"


PEDAC
-----

inputs: String
- URL
- lowercase letters
- / : . -
outputs: String
- domain name

Rules:
- get the domain name from the url
The domain name:
- is always followed by a "."
- is preceded by "//" or "." or both


Examples:

domainName("http://github.com/carbonfive/raygun") == "github" 
-> "//" precedes "github" and is followed by "."

domainName("http://www.zombie-bites.com") == "zombie-bites"
-> "." precedes "zombie-bites" and is followed by "."

domainName("https://www.cnet.com") == "cnet"
-> "." precedes "cnet" and is followed by "."

domainName("http://google.co.jp") == "google"
-> "//" precedes "google" and is followed by ".co.jp"


HACK AND SLASHED THIS ONE
*/

function domainName(url) {
  let domain;

  if (url.indexOf("//") > -1) {
    domain = url.split('/')[2];
  }
  else {
    domain = url.split('/')[0];
  }

  let domainParts = domain.split('.');
  
  if (domainParts[0] === 'www') {
    return domainParts[1];
  } else {
    return domainParts[0];
  }
}

// Top Codewars solution

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
