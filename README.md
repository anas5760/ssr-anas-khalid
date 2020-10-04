# ssr-anas-khalid
Sample demo project implementing ssr to display list using react.

Initial Setup

1. Clone 'main' branch from the repository.
2. run npm install

Development
npm start
Start the dev server at http://localhost:3000
npm test
Start jest in watch mode

What's included:

Server-side rendering with code splitting (via the React Loadable package)
Server-side data fetching and client-side hydration
React Router
Conditionally load pollyfills -- only ship bloat to outdated browsers
React Helmet for dynamic manipulation of the document <head />
Dev server with hot reloading styles
CSS Modules, Sass, and autoprefixer
Jest and react-testing-library ready to test the crap out of some stuff
Run-time environment variables
Node.js clusters for improved performance under load (in production)
Prettier and ESLint run on commit
Docker-ized for production like a bawsss


What could be improved
1. Increase coverage of test cases.
2. Improve suspense loading on page load.
