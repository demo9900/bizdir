export const textformate = (string) => {
    return string.replace(/\b\w/g, (char) => char.toUpperCase());
  };