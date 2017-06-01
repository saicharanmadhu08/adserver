const Ads = require('../models/ads');

exports.saveAd = function (req, res) {

    const partner_id = req.body.partner_id;
    const duration = req.body.duration;
    const ad_content = req.body.ad_content;

    const ads = new Ads({
        partner_id, duration, ad_content
    });

    console.log(ads);

    ads.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
}

/*{
"partner_id": "unique_string_representing_partner',
"duration": "int_representing_campaign_duration_in_seconds_from_now"
"ad_content": "string_of_content_to_display_as_ad"
}*/
