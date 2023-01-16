export const getGoogleDriveId = (url: string) => {
  const id = url.match(/[-\w]{25,}/);
  if (id) return "https://drive.google.com/uc?id=" + id[0] + "&export=view";
  return url;
};

export const getUrlEmbedYT = (url: string) => {
  var id = url.split("v=")[1];
  var ampersandPosition = id.indexOf("&");
  if (ampersandPosition != -1) {
    id = id.substring(0, ampersandPosition);
  }
  return "https://www.youtube.com/embed/" + id;
};
