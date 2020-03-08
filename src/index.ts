import HelloViewModel from './hello'
import * as ko from 'knockout'

ko.applyBindings(
  new HelloViewModel('TypeScript', 'Knockout'),
  document.getElementById('hello')
)
