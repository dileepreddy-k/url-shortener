const urlModel = require('../Models/url.model');

const redirectToLongUrl = async (req, res, next) => {
    try {
        const url = await urlModel.findOne({
            urlCode: req.params.urlCode
        });

        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(400).json('No Url Found');
        }
    } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
    }
}

module.exports = {
    redirectToLongUrl
}