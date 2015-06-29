export class TypeHelper
{
    static isEmail(obj) {
        return obj.indexOf("@") >= 0;
    }
}