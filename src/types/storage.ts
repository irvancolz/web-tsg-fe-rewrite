export type UploadFileResp = {
  id: string;
  path: string;
  fullPath: string;
};

export const ALLOWED_EXT_TO_UPLOAD = ["jpeg", "jpg", "webp", "png"] as const;
