import md5 from "md5"

export class App
{
    constructor(){
        this.wannabeHash = "test@test.com";
        this.currentCredential = "test@test.com";
        this.size = "64";
        this.rating = "G";
        this.defaultImage = "wavatar";
    }

    get generatedHash() {
        return md5(this.wannabeHash);
    };
}