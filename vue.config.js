module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost/scrum3-vuemw',
      },
      '/': {
        target: 'http://localhost',
      }

    }
  }
}
