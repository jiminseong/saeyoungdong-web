export const DEFAULT_BASE_URL = "https://새영동갈비.com";

export function getBaseUrl() {
  return new URL(process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BASE_URL).origin;
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getBaseUrl()).toString();
}
