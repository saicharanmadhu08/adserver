const Ads = require('../models/ads');
const moment = require('moment');

exports.saveAd = (req, res) => {

    const partner_id = req.body.partner_id;
    const duration = req.body.duration;
    const ad_content = req.body.ad_content;
    const time_of_creation = moment().format();

    const ads = new Ads({ partner_id, duration, ad_content, time_of_creation });
    ads.save().then(doc => res.send(doc), e => res.status(400).send(e));
}


exports.getAd = (req, res) => {

    const partner_id = req.params.partner_id;

    Ads.findOne({ partner_id })
        .then(doc => {

            const time_of_creation = doc.time_of_creation;
            const duration = doc.duration;
            const resultDate = moment(time_of_creation).second(duration);

            var current_time = moment(current_time);
            var temp = moment(resultDate);

            if (temp.diff(current_time, 'seconds') > 0) {
                res.send(doc);
            } else {
                res.send("no active ad campaigns exist for the specified partner");
            }

        }, e => res.status(400).send(e));
}

