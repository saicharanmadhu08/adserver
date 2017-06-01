const Ads = require('./controllers/ads');

module.exports = function (app) {

    app.post('/saveAdd', Ads.saveAd);

}