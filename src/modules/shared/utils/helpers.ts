export const keyHandler = (key: string, handler: () => void) =>
  key === "Enter" && handler();
