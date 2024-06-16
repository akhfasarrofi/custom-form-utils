export const isLt2M = (size: number) => size / 1024 / 1024 < 2;

export const isLt1M = (size: number) => size / 1024 / 1024 < 1;

export const isJpgOrPng = (file: File) =>
  file.type === 'image/jpeg' || file.type === 'image/png';
