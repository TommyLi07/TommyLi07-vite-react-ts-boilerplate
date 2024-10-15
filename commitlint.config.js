export default {
  // Inheritance rules
  extends: ['@commitlint/config-conventional'],
  // Defining Rule Types
  rules: {
    // type type definition, indicating that the type submitted by git must be within the following type range
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // fixed bug
        'docs', // documents
        'style',
        'refactor',
        'perf', // performance
        'test',
        'chore', // Changes to the build process or supporting tools
        'revert',
        'build'
      ]
    ],
    // No case check is performed on subject
    'subject-case': [0]
  }
}
