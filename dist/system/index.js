System.register(["./generators/template-generator", "./generator/gravatar-url-generator"], function (_export) {
    "use strict";

    var TemplateGenerator, GravatarUrlGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(GravatarUrlGenerator, new GravatarUrlGenerator());
        aurelia.globalizeResources("./elements/gravatar-element");
    }

    return {
        setters: [function (_generatorsTemplateGenerator) {
            TemplateGenerator = _generatorsTemplateGenerator.TemplateGenerator;
        }, function (_generatorGravatarUrlGenerator) {
            GravatarUrlGenerator = _generatorGravatarUrlGenerator.GravatarUrlGenerator;
        }],
        execute: function () {}
    };
});