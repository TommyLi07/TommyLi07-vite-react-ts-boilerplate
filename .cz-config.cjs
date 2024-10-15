module.exports = {
  // Optional types, corresponding to the rules configured in commitlint.config.js above
  types: [
    { value: 'feat', name: 'feat: new feature' },
    { value: 'fix', name: 'fix: bugfix' },
    { value: 'docs', name: 'docs: documentation changes' },
    { value: 'style', name: 'style: code format' },
    {
      value: 'refactor',
      name: 'refactor: a code change that neither fixes a bug nor adds a feature'
    },
    { value: 'perf', name: 'perf: performance optimization' },
    { value: 'test', name: 'test: adding missing tests' },
    {
      value: 'chore',
      name: 'chore: changes to the build process or auxiliary tools and libraries such as documentation generation'
    },
    { value: 'revert', name: 'revert: revert to a commit' },
    { value: 'build', name: 'build: build a bundle' }
  ],
  messages: {
    type: "Select the type of change that you're committing",
    // customScope: '请输入修改范围(可选):',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // body: '请输入详细描述(可选):',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?(y/n)'
  },
  // Skip issue: modification scope, custom modification scope, detailed description, issue related
  skipQuestions: ['scope', 'customScope', 'body', 'footer'],
  // The maximum length of the subject description is 72 characters.
  subjectLimit: 72
}
