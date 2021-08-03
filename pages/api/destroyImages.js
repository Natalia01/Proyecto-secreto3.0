const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'klog-co',
  api_key: '158516657437216',
  api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default async (req, res) => {

  console.log(req.body.body)/* 
  const imageResult = await cloudinary.uploader.destroy(req.body, () => { })
  res.status(200).json(imageResult) */
  return res.json()
}