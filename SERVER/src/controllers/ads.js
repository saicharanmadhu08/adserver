const Ads = require('../models/ads');
const moment = require('moment');

exports.saveAd = (req, res) => {

    const partner_id = req.body.partner_id;
    const duration = req.body.duration;
    const ad_content = req.body.ad_content;
    const time_of_creation = moment().format();

    const ads = new Ads({ partner_id, duration, ad_content, time_of_creation });

    Ads.find({ partner_id })
        .then(doc => {
            if (doc.length <= 0) {
                ads.save().then(doc => res.send(doc), e => res.status(400).send(e));
            } else {
                res.send("Failed to make, multiple ads for a given partner. If you still want to post an Ad for existing Parter ID, then use \" /ad/:partner_id \"")
            }
        }, e => res.status(400).send(e));

}

exports.saveAddtionalAd = (req, res) => {
    const partner_id = req.body.partner_id;
    const duration = req.body.duration;
    const ad_content = req.body.ad_content;
    const time_of_creation = moment().format();


    const ads = new Ads({ partner_id, duration, ad_content, time_of_creation });

    ads.save().then(doc => res.send(doc), e => res.status(400).send(e));

}


exports.getAd = (req, res) => {

    const partner_id = req.params.partner_id;

    Ads.find({ partner_id })
        .then(docs => {

            let activeAds = [];

            docs.forEach((doc, index) => {


                const time_of_creation = doc.time_of_creation;
                const duration = doc.duration;
                const resultDate = moment(time_of_creation).second(duration);

                var current_time = moment(current_time);
                var temp = moment(resultDate);

                if (temp.diff(current_time, 'seconds') > 0) {
                    activeAds.push(doc);
                }

            });

            if (activeAds.length !== 0) {
                res.send(activeAds);
            } else {
                res.send("no active ad campaigns exist for the specified partner");
            }


        }, e => res.status(400).send(e));
}

exports.getAds = (req, res) => {

    Ads.find({}).then(doc => res.send(doc), e => res.status(400).send(e));

}

