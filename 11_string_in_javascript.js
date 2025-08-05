const name = "Gaurav Gupta"
let repoCount = 10

console.log(name + repoCount); // outdated use .... do not concatenate a striong like this 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
console.log(`${name} ${repoCount}`);


// IMPORTANT : We can have access to too many methods and prototypes here, gives indexing in string too
const myCity = new String("Khalilabad");

console.log(myCity.length);
console.log(myCity.endsWith('bad'));

/* COMMON STRING METHODS USED.... */

/*
const browserType = "mozilla";

==> length of string 
    -> browserType.length;

==> Retrieving a specific string character
    -> browserType[0];

==> Retrieve the last character of any string
    -> browserType[browserType.length - 1];

==> If a string contains a substring
    -> if (browserType.includes("zilla")) {
        console.log("Found zilla!"); }
        else {
        console.log("No zilla here!");
        }

==> If a string starts or ends with a particular substring
    -> if (browserType.startsWith("zilla")) {
        console.log("Found zilla!"); }
        else {
        console.log("No zilla here!");
        }

        if (browserType.endsWith("zilla")) {
        console.log("Found zilla!"); }
        else {
        console.log("No zilla here!");
        }

==> Finding the position of a substring in a string(imp)
        -> const tagline = "MDN - Resources for developers, by  developers";
        console.log(tagline.indexOf("developers")); // 20

        console.log(tagline.indexOf("x")); // -1

        const firstOccurrence = tagline.indexOf("developers");
        const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

        console.log(firstOccurrence); // 20
        console.log(secondOccurrence); // 35
`
==> Extracting a substring from a string
    -> const browserType = "mozilla";
       console.log(browserType.slice(1, 4)); // "ozi"

       browserType.slice(2); // "zilla", extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter

==> Changing case
    -> const radData = "My NaMe Is MuD";
        console.log(radData.toLowerCase());
        console.log(radData.toUpperCase());

==> Updating parts of a string
    -> const browserType = "mozilla";
        const updated = browserType.replace("moz", "van");
        // returns a new string, do not change original one

        console.log(updated); // "vanilla"
        console.log(browserType); // "mozilla"

        If you want to update the original browserType variable, you would have to do something like this:
        browserType = browserType.replace("moz", "van");

        Be aware that replace() in this form only changes the first occurrence of the substring. If you want to change all occurrences, you can use replaceAll():
        let quote = "To be or not to be";
        quote = quote.replaceAll("be", "code");
        console.log(quote); // "To code or not to code"

==> Note : We cannot give negative value in substring parameter(if given,it will return whole string as it is), but we can give it in slice parameter , 

==> To remove extra or unwanted spaces in a string
    -> const name3 = "    Gaurav Gupta     "
        const name30 = name3.trim();
        console.log(name3);
        console.log(name30);

==> Split a string based on dashes or spaces etc.(imp)
    ->  let hero = "your-hero-is-father";
        console.log(hero.split('-')); // splits for each dashes into an 'array'.

 */