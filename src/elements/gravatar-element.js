import {inject, customElement, useView, bindable} from 'aurelia-framework'
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

  attached() {
    this.refreshBindings();
  }

  propertyChanged() {
    this.refreshBindings();
  }

  refreshBindings() {
    this.generatedUrl = this.urlGenerator.generateUrl(this.credential, this.size, this.defaultImage, this.rating, this.isSecure);
  }
}
