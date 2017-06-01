const Ads = require('./controllers/ads');

module.exports = function (app) {

    app.post('/ad', Ads.saveAd);

    app.get('/ad/:partner_id', Ads.getAd);

}