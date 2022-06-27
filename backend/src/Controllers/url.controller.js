const validUrl = require('valid-url');
const uniqueId = require('generate-unique-id');

const urlModel = require('../Models/url.model');

const shortenUrl = async (req, res, next) => {
    const { longUrl } = req.body;

    console.log(longUrl);
    const baseUrl = process.env.BASE_URL;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    const urlCode = uniqueId({ length: 8 });
    console.log(urlCode);

    if (validUrl.isUri(longUrl)) {
        try {
            let url = await urlModel.findOne({ longUrl })

            if (url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;

                url = new urlModel({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                });

                await url.save();

                res.json(url);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(401).json('Invalid Url');
    }
}

module.exports = {
    shortenUrl
}