# Aurelia-Gravatar

A simple plugin for aurelia to add attributes to turn an <img> image into a gravatar image as well as a 
custom element to just add gravatar images.

## Installing

with jspm

`jspm install grofit/aurelia-gravatar`

then

`aurelia.use.plugin("aurelia-gravatar");`

## Example

### Live Example
[View Example](https://rawgit.com/grofit/aurelia-gravatar/master/examples/index.html)

You can see the code and everything in the examples folder!

### Textual Examples

A simple example of adding a gravatar for a user:
```
<gravatar id="some-gravatar-element" credential.bind="myUser.EmailAddress" /> 
```

A more complicated example with custom settings:
```
<gravatar id="some-gravatar-element" credential.bind="myUser.Md5HashedEmailAddress" size="25" defaultImage="wavatar" is-secure="true" rating="g" />
```

As shown above you can pass in the plain text email address, or if you dont want to publicly expose the 
users email address you can always just md5 hash the users email before passing it over. (Internally it hashes 
an email address if it is passed over in plain-text anyway).

The available options for this binding are:

* **credential** - The users email or hashed email address to be used to uniquely identify this user to gravatar
* **size** - The size required for the generated image
* **default-image** - The default gravatar generated images to use if no custom avatar exists, i.e (wavatar, identicon)
* **rating** - The rating constraint for the images i.e (g, pg, r, x)
* **is-secure** - If you want to use https or http for getting the image

You can mix and match the properties, if it is provided then it will be used, if not dont worry about it.