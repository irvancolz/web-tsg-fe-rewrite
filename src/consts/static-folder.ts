export const STATIC_SVG_FILE_PATH = "/images/svg";
export const STATIC_PNG_FILE_PATH = "/images/png";
export const STATIC_WEBP_FILE_PATH = "/images/webp";
export const STATIC_JPG_FILE_PATH = "/images/jpg";
export const STATIC_VIDEO_FILE_PATH = "/video";

type StaticImgFolder =
  | typeof STATIC_SVG_FILE_PATH
  | typeof STATIC_PNG_FILE_PATH
  | typeof STATIC_WEBP_FILE_PATH
  | typeof STATIC_JPG_FILE_PATH
  | typeof STATIC_VIDEO_FILE_PATH;

export function getStaticAssetsPath(path: StaticImgFolder, assets: string) {
  return path + "/" + assets;
}
