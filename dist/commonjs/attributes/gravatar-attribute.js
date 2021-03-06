'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _generatorGravatarUrlGenerator = require("../generator/gravatar-url-generator");

var GravatarAttribute = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(GravatarAttribute, [{
    key: 'credential',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'size',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'defaultImage',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'rating',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }, {
    key: 'isSecure',
    decorators: [_aureliaFramework.bindable],
    initializer: null,
    enumerable: true
  }], null, _instanceInitializers);

  function GravatarAttribute(element, urlGenerator) {
    _classCallCheck(this, _GravatarAttribute);

    _defineDecoratedPropertyDescriptor(this, 'credential', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'defaultImage', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'rating', _instanceInitializers);

    _defineDecoratedPropertyDescriptor(this, 'isSecure', _instanceInitializers);

    this.element = element;
    this.urlGenerator = urlGenerator;
  }

  _createDecoratedClass(GravatarAttribute, [{
    key: 'attached',
    value: function attached() {
      this.refreshBindings();
    }
  }, {
    key: 'propertyChanged',
    value: function propertyChanged() {
      this.refreshBindings();
    }
  }, {
    key: 'refreshBindings',
    value: function refreshBindings() {
      this.element.src = this.urlGenerator.generateUrl(this.credential, this.size, this.rating, this.defaultImage, this.isSecure);
    }
  }], null, _instanceInitializers);

  var _GravatarAttribute = GravatarAttribute;
  GravatarAttribute = (0, _aureliaFramework.inject)(Element, _generatorGravatarUrlGenerator.GravatarUrlGenerator)(GravatarAttribute) || GravatarAttribute;
  GravatarAttribute = (0, _aureliaFramework.customAttribute)('gravatar')(GravatarAttribute) || GravatarAttribute;
  return GravatarAttribute;
})();

exports.GravatarAttribute = GravatarAttribute;