import { client, q } from '../../config/db';
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'klog-co',
  api_key: '158516657437216',
  api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default async (req, res) => {
  const { email, operationNumber, priority, description, images, state } = JSON.parse(req.body)
  const uploadedImages = images.map(async imageToUpload => {
    const imageResult = await cloudinary.uploader.upload(imageToUpload, () => { })
    const { url, public_id } = imageResult
    return { imageUrl: url, imageId: public_id }
  })
  const resolvedUploadedImages = await Promise.all(uploadedImages)
  const date = new Date().toString()
  await client
    .query(
      q.Create(
        q.Collection('issues'), {
        data: {
          email,
          date,
          operationNumber,
          priority,
          description,
          resolvedUploadedImages,
          state,
        }
      })
    ).then(() => res.json())
}