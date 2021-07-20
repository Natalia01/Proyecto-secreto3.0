const cloudinary = require('cloudinary').v2

  cloudinary.config({
  cloud_name: 'klog-co',
  api_key: '158516657437216',
  api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default function handler(req, res) {
  cloudinary.uploader.upload(req.body,(error,result)=>console.log(error,result)
  )
}