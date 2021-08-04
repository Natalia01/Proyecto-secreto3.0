const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'klog-co',
  api_key: '158516657437216',
  api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default async (req, res) => {
  const body = req.body.body
  console.log(body)
  const deleteImages = () => body.map(async ({ imageId }) => await cloudinary.uploader.destroy(imageId, () => { }))
  deleteImages(req)
  return res.json()
}