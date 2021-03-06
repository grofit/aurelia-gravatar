"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _generatorGravatarUrlGenerator = require("./generator/gravatar-url-generator");

function configure(aurelia) {
    aurelia.container.registerInstance(_generatorGravatarUrlGenerator.GravatarUrlGenerator, new _generatorGravatarUrlGenerator.GravatarUrlGenerator());
    aurelia.globalResources("./elements/gravatar-element");
    aurelia.globalResources("./attributes/gravatar-attribute");
}