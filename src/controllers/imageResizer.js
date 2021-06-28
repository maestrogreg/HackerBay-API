/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-keys */
import imageDownloader from 'node-image-downloader';
import resizer from 'node-image-resizer';

export const resizeImage = async (req, res) => {

    try {

        imageDownloader({
            'imgs': [
                {
                    'uri': req.body.url,
                    'filename': 'image'
                }
            ],
            'dest': './images'
        }).
            then((info) => {}).
            catch((error, response, body) => {

                throw new Error('Error saving image');

            });
        const setup = {
            'all': {
                'path': './thumbnails/',
                'quality': 80
            },
            'versions': [
                {
                    'quality': 100,
                    'prefix': 'small_',
                    'width': 50,
                    'height': 50
                }
            ]
        };

        // Create thumbnails
        const thumbs = await resizer('./images/image.jpg', setup);
        res.status(200).json({'status': 'ok',
            'message': 'Image successfully resized'});

    } catch (err) {

        res.status(400).json({'status': 'error',
            'message': 'error saving image'});

    }

};