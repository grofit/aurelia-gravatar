System.register(["../helpers/type-helper", "md5"], function (_export) {
        "use strict";

        var TypeHelper, md5, GravatarUrlGenerator;

        var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

        return {
                setters: [function (_helpersTypeHelper) {
                        TypeHelper = _helpersTypeHelper.TypeHelper;
                }, function (_md5) {
                        md5 = _md5.md5;
                }],
                execute: function () {
                        GravatarUrlGenerator = (function () {
                                function GravatarUrlGenerator() {
                                        _classCallCheck(this, GravatarUrlGenerator);
                                }

                                _createClass(GravatarUrlGenerator, [{
                                        key: "generateUrl",
                                        value: function generateUrl(credential, size, rating, defaultImage, isSecure) {
                                                var hashedCredential = TypeHelper.isEmail(credential) ? md5(credential) : credential;

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

                        _export("GravatarUrlGenerator", GravatarUrlGenerator);
                }
        };
});