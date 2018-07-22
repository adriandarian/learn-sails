/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step("next", value);
            },
            function(err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}

module.exports = {

  render: (() => {
    var _ref = _asyncToGenerator(function*(request, response) {
      try {
        let data = yield User.findOne({
          email: "johnnie86@gmail.com"
        });
        if (!data) {
          return response.notFound("The user was NOT found!");
        }
        response.view("pages/profile", {data});
      } catch (err) {
        response.serverError(err);
      }
    });

    return function render(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  })()

};

