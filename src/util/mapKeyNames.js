export const convertToString = (string) => {
    return string
      .split(/(?=[A-Z])/)
      .map((p) => {
        return p[0].toUpperCase() + p.slice(1);
      })
      .join(' ');
  }