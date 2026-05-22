export type AppRoutePath = "/" | "/destination" | "/crew" | "/technology";

export const BACKGROUND_MAP: Record<AppRoutePath, string> = {
  "/": "home", // CSS class names
  "/destination": "destination",
  "/crew": "crew",
  "/technology": "technology",
};
