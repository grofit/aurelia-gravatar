import {inject, customAttribute, useView, bindable} from 'aurelia-framework'
import {GravatarUrlGenerator} from "../generator/gravatar-url-generator"

@customAttribute('gravatar')
@inject(Element, GravatarUrlGenerator)
export class GravatarAttribute {
  @bindable credential;
  @bindable size;
  @bindable defaultImage;
  @bindable rating;
  @bindable isSecure;

  constructor(element, urlGenerator) {
    this.element = element;
    this.urlGenerator = urlGenerator;
  }

  attached() {
    this.refreshBindings();
  }

  propertyChanged() {
    this.refreshBindings();
  }

  refreshBindings() {
    this.element.src = this.urlGenerator.generateUrl(this.credential, this.size, this.defaultImage, this.rating, this.isSecure);
  }
}
