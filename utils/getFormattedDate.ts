export function getFormattedDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("tr-TR").format(date);
}