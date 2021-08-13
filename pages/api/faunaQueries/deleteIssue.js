import { client, q } from '../../config/db';
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: 'klog-co',
    api_key: '158516657437216',
    api_secret: '7OhrSLDoNqVYYFI12a-NLdIMLME'
})
export default async function deleteIssue(req, res) {
    const { id, resolvedUploadedImages } = JSON.parse(req.body)
    const deleteImages = () =>
        resolvedUploadedImages.map(
            async ({ imageId }) =>
                await cloudinary.uploader.destroy(imageId, () => { }))
    await client
        .query(
            q.Delete(
                q.Ref(
                    q.Collection('issues'), id)
            )
        )
    await deleteImages()
    return res.json()
}