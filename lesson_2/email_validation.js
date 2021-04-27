/*
Problem:
--------

Implement a function that takes a string argument in the form of an email
address and check whether the address is valid based on the following
criteria:

- There must be one @ sign.
- The local part must contain one or more letters (A-Z, a-z) and/or digits 
(0-9). It may not contain any other characters.
- The domain part must contain two or more components with a single dot (.) 
between each component. Each component must contain one or more letters 
(A-Z, a-z) only.

** An @ sign separates the two parts: local-part@domain-part. The local part 
is the name of the mailbox; this is usually a username. The domain part is 
the domain name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The 
domain name contains a server name (sometimes called the mail server name) 
and a top-level domain (.com, .ph, etc.).

Rules:
  * Explicit
    - There must be one @ sign
    - The local part can only contain letters (a-zA-Z) and numbers (0-9)
    - the domain part must contain two or more components with a single
    dot between each component
    - each domain part component must contain one or more letters: (a-zA-Z) only
  * Implicit
    - All test cases include 1 @ sign

Algorithm:
----------

- We need to split the address into 2 parts, the local and the domain.
email.split('@');
- if there is no @ sign, we can immediately return false
- this will give us a 2 element array which we can assign the first element
to local and the second element to domain like this:
[local, domain] = email.split('@');
- Now we can start validating each part of the address starting with the local.
My first thought is to use a regex that checks the string to see if there's
a match between anything other than letters and numbers, if there is,
return false.
localRegex = /[^a-z0-9]/gi
- This regex will match anything that is not a letter or a number, and if
it matches, we return false.
  - This won't actually work because say if we have this address: '@bar.com',
  the regex will return null because it doesn't match with any of the stuff dont
  want which is good, but it also doesn't fit the criteria above.

I could not figure out way to make the above work so I ended up just free
wheeling and constructing a regex that would match a valid address in its
entirety which is what you see below and is quite similar to the LS solution.
*/

function isValidEmail(email) {
  return !!email.match(/^([a-z0-9]+)@{1}([a-z]+\.{1}[a-z]+)+$/i);
}

// OR LS Solution:

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false
isValidEmail('@bar.com')                 // returns false

/*
Breakdown of the LS Regex:

1. The entire regex must match starting at the beginning: ^
2. The local part has letters or numbers only: [a-z0-9]+
3. The @ sign comes next: @
4. The email server name contains one or more components; each component contains letters followed by a single dot: ([a-z]+\.)+. Notice the use of grouping parentheses here to treat both [a-z] and \. as a single pattern, and that we apply + to that pattern as a whole.
5. The top-level domain: [a-z]+
6. The entire regex must match up to the end: $
7. And finally, we apply the i modifier so that the regex is case-insensitive.
*/