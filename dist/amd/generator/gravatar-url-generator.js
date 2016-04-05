define(["exports", "../helpers/type-helper", "md5"], function (exports, _helpersTypeHelper, _md5) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
                value: true
        });

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        var _md52 = _interopRequireDefault(_md5);

        var GravatarUrlGenerator = (function () {
                function GravatarUrlGenerator() {
                        _classCallCheck(this, GravatarUrlGenerator);
                }

                _createClass(GravatarUrlGenerator, [{
                        key: "generateUrl",
                        value: function generateUrl(credential, size, rating, defaultImage, isSecure) {
                                console.log("args", arguments);
                                var hashedCredential = _helpersTypeHelper.TypeHelper.isEmail(credential) ? (0, _md52["default"])(credential) : credential;

                                var url = isSecure ? "https://secure.gravatar.com/avatar/" : "http://www.gravatar.com/avatar/";
                                url += hashedCredential + ".jpg?";

                                if (size) {
                                        url += "s=" + size + "&";
                                }

                                if (rating) {
                                        url += "r=" + rating + "&";
                                }

                                if (defaultImage) {
                                        url += "d=" + encodeURIComponent(defaultImage);
                                }

                                return url;
                        }
                }]);

                return GravatarUrlGenerator;
        })();

        exports.GravatarUrlGenerator = GravatarUrlGenerator;
});