const Ads = require('./controllers/ads');

module.exports = function (app) {

    app.post('/ad', Ads.saveAd);

    app.post('/ad/:partner_id', Ads.saveAddtionalAd);

    app.get('/ad/:partner_id', Ads.getAd);

    app.get('/ad', Ads.getAds);


}