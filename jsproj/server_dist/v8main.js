BASE_URL = "http://dev.olist.ng";
if(APP_ENV === 'prod') {
    BASE_URL = 'https://olist.ng';
}
AJAX_BASE_URL = BASE_URL;

v8worker.send(101, JSON.stringify({base: BASE_URL, ajax: AJAX_BASE_URL}));

renderToString = require("vue-server-renderer/basic.js");
serverBundle = require("server.js").default;