import HelloViewModel from './hello'

test('should get hello value', () => {
  const hello = new HelloViewModel('typescript', 'hello')
  expect(hello.framework()).toBe('hello')
  expect(hello.language()).toBe('typescript')
})
