import { client, q } from '../../config/db';
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'klog-co',
  api_key: '158516657437216',
  api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default async (req, res) => {
  const { email, operationNumber, priority, description, images, state, seenDate, tags, solvedDate } = JSON.parse(req.body)
  const uploadedImages = images.map(async imageToUpload => {
    const imageResult = await cloudinary.uploader.upload(imageToUpload, () => { })
    const { url, public_id } = imageResult
    return { imageUrl: url, imageId: public_id }
  })
  const resolvedUploadedImages = await Promise.all(uploadedImages)
  const sentDate = new Date().toLocaleString([], //convierte la hora en la que se envió el problema a formato DD/MM/YYYY hh:mm
    { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  await client
    .query(
      q.Create(
        q.Collection('issues'), {
        data: {
          email,
          sentDate,
          operationNumber,
          priority,
          description,
          resolvedUploadedImages,
          state,
          seenDate,
          tags,
          solvedDate
        }
      })
    ).then(() => res.json())
}