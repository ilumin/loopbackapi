module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  // router.get('/', server.loopback.status());
  router.get('/test-param/:name', function(req, res) {
    res.send('Hello, ' + req.param('name'));
  });
  server.use(router);
};
