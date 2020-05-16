export const sortMembers = (data = []) => {
  return data.sort((x, y) => (x.role == 'Başkan' ? -1 : y.role === "Başkan" ? 1 : 0));
}