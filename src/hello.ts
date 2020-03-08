import * as ko from 'knockout'

export default class HelloViewModel {
  language: KnockoutObservable<string>
  framework: KnockoutObservable<string>

  constructor(language: string, framework: string) {
    this.language = ko.observable(language)
    this.framework = ko.observable(framework)
  }
}
