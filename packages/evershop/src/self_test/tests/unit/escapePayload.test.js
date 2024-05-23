// escapePayload.test.js
const { escapeHtmlTags, escapePayload } = require('../../../modules/base/services/escapePayload'); // adjust the path to your actual file

describe('escapeHtmlTags', () => {
    it('should escape HTML tags', () => {
        const str = '<p>This is a <strong>sample</strong> text.</p>';
        const escaped = escapeHtmlTags(str);
        expect(escaped).toBe('&lt;p&gt;This is a &lt;strong&gt;sample&lt;/strong&gt; text.&lt;/p&gt;');
      });
});

// describe('escapePayload', () => {
//   it('should escape HTML tags in all properties of an object', () => {
//     const obj = {
//       prop1: '<h1>Hello</h1>',
//       prop2: '<p>World</p>'
//     };
//     escapePayload(obj);
//     expect(obj).toEqual({
//       prop1: '&lt;h1&gt;Hello&lt;/h1&gt;',
//       prop2: '&lt;p&gt;World&lt;/p&gt;'
//     });
//   });
// });