export const fileUpload = async (file) => {
    if (!file) throw new Error('File does not exist')
    const cloudUrl = 'https://api.cloudinary.com/v1_1/df5flpd2z/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData

        });

        console.log(resp);
        if (!resp.ok) {
            throw new Error('File can not be uploaded')
        }

        const cloudResp = await resp.json();
        console.log(cloudResp)
        return cloudResp.secure_url;
    } catch (error) {
        console.error(error);
        throw new Error('File does not exist')
    }

}