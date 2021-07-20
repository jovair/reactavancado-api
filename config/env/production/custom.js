module.exports = ({ env }) => ({
  netlifyWebehook: env('NETLIFY_WEBHOOK')
})