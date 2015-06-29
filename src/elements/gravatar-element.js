import {inject, customElement, noView, bindable} from 'aurelia-framework'
import {GravatarUrlGenerator} from "../generator/gravatar-url-generator"

@customElement('gravatar')
@useView("./gravatar-element.html")
@inject(GravatarUrlGenerator)
export class GravatarElement {
  @bindable credential;
  @bindable size;
  @bindable defaultImage;
  @bindable rating;
  @bindable isSecure;

  @bindable generatedUrl = "";

  constructor(urlGenerator) {
    this.urlGenerator = urlGenerator;
  }

  bind() {
    this.generatedUrl = this.urlGenerator.generateUrl(credential, size, defaultImage, rating, isSecure);
  }
}
