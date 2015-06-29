System.register(['aurelia-framework', '../generator/gravatar-url-generator'], function (_export) {
  'use strict';

  var inject, customElement, noView, bindable, GravatarUrlGenerator, GravatarElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      noView = _aureliaFramework.noView;
      bindable = _aureliaFramework.bindable;
    }, function (_generatorGravatarUrlGenerator) {
      GravatarUrlGenerator = _generatorGravatarUrlGenerator.GravatarUrlGenerator;
    }],
    execute: function () {
      GravatarElement = (function () {
        var _instanceInitializers = {};

        function GravatarElement(urlGenerator) {
          _classCallCheck(this, _GravatarElement);

          _defineDecoratedPropertyDescriptor(this, 'credential', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'defaultImage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'rating', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'isSecure', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'generatedUrl', _instanceInitializers);

          this.urlGenerator = urlGenerator;
        }

        var _GravatarElement = GravatarElement;

        _createDecoratedClass(_GravatarElement, [{
          key: 'bind',
          value: function bind() {
            this.generatedUrl = this.urlGenerator.generateUrl(credential, size, defaultImage, rating, isSecure);
          }
        }, {
          key: 'credential',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'size',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'defaultImage',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'rating',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'isSecure',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'generatedUrl',
          decorators: [bindable],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }], null, _instanceInitializers);

        GravatarElement = inject(GravatarUrlGenerator)(GravatarElement) || GravatarElement;
        GravatarElement = useView('./gravatar-element.html')(GravatarElement) || GravatarElement;
        GravatarElement = customElement('gravatar')(GravatarElement) || GravatarElement;
        return GravatarElement;
      })();

      _export('GravatarElement', GravatarElement);
    }
  };
});