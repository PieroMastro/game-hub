const getCroppedImgURL = (url: string) => {
  const index = url.indexOf("media/") + 6;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImgURL;
