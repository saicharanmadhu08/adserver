const Ads = require('../models/ads');

exports.saveAd =  (req, res) => {

        const partner_id = req.body.partner_id;
        const duration = req.body.duration;
        const ad_content = req.body.ad_content;

        const ads = new Ads({
            partner_id, duration, ad_content
        });


        ads.save().then((doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        });
}


exports.getAd = (req, res) => {
    
    const partner_id = req.params.partner_id;

    Ads.findOne({partner_id})
            .then((doc) => {
                res.send(doc)
            }, (e) => {
                res.status(400).send(e);
            });
} 

