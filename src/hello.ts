import * as ko from 'knockout'

export default class HelloViewModel {
  language: ko.Observable<string>
  framework: ko.Observable<string>

  constructor(language: string, framework: string) {
    this.language = ko.observable(language)
    this.framework = ko.observable(framework)
  }
}
