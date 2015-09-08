import {TypeHelper} from "../helpers/type-helper"
import md5 from "md5"

export class GravatarUrlGenerator
{
    generateUrl(credential, size, rating, defaultImage, isSecure) {
        var hashedCredential = TypeHelper.isEmail(credential) ? md5(credential) : credential;

        var url = isSecure ? "https://secure.gravatar.com/avatar/" : "http://www.gravatar.com/avatar/";
        url += hashedCredential + "?";

        if(size)
        { url += "s=" + size + "&"; }

        if(rating)
        { url += "r=" + rating + "&"; }

        if(defaultImage)
        { url += "d=" + encodeURIComponent(defaultImage); }

        return url;
    }
}
