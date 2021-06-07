function greetings(name, status) {
  let fullName = name.join(' ');
  let jobTitle = status.title + ' ' + status.occupation;

  return `Hello, ${fullName}! Nice to have a ${fullTitle} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.