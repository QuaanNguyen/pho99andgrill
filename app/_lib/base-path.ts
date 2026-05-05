export const BASE_PATH =
  typeof process.env.NEXT_PUBLIC_BASE_PATH === "string"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

export function withAssetPath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}

export function withHref(href: string): string {
  if (
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//")
  ) {
    return href;
  }

  let path = href;
  const hashIdx = path.indexOf("#");
  let hash = "";
  if (hashIdx >= 0) {
    hash = path.slice(hashIdx);
    path = path.slice(0, hashIdx);
  }

  let normalized =
    path === "/" || path === "" ? "/" : path;
  if (
    normalized.startsWith("/") &&
    normalized !== "/" &&
    !normalized.endsWith("/") &&
    !normalized.includes(".")
  ) {
    normalized = `${normalized}/`;
  }

  return `${BASE_PATH}${normalized}${hash}`;
}
