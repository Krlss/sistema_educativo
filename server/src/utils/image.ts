export const getGoogleDriveId = (url: string) => {
  const id = url.match(/[-\w]{25,}/);
  if (id) return "https://drive.google.com/uc?id=" + id[0] + "&export=view";
  return null;
};
