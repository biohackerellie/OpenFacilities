export default async function Uploader(file: File, id: any) {
  console.log('file', file);
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/api/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName: file.name as string,
        fileType: file.type,
        fileSize: file.size,
        id: id,
      }),
    });
    console.log('res', res);

    const { putUrl, getUrl } = await res.json();

    const uploadResponse = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file,
    });
    return { status: uploadResponse.ok, uploadedURL: getUrl };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
