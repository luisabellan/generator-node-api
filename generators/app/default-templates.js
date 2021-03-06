module.exports = [
  { src: '_README.md', dest: 'README.md' },
  { src: '_package.json', dest: 'package.json' },
  { src: 'LICENSE' },
  { src: 'CODE_OF_CONDUCT.md' },
  { src: 'CONTRIBUTING.md' },
  { src: '.dockerignore' },
  { src: '.env.sample', dest: '.env.sample' },
  { src: '.env.sample', dest: '.env' },
  { src: '.eslintignore' },
  { src: '.eslintrc.js' },
  { src: '_gitignore', dest: '.gitignore' },
  { src: '.prettierignore' },
  { src: '.prettierrc.js' },
  { src: 'docker-compose.yml' },
  { src: 'server.js' },
  { src: '__tests__/**', dest: '__tests__' },
  { src: '.github/**', dest: '.github' },
  { src: 'api/**', dest: 'api' },
  { src: 'config/**', dest: 'config' },
  { src: 'data/**', dest: 'data' },
  { src: 'docker/**', dest: 'docker' },
];