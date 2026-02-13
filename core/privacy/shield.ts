export function protect(data: any) {
  return {
    ...data,
    masked: true,
  };
}
