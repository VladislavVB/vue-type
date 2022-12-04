const conversionDegrees = (unit: number) => {
  return Math.round( ((unit - 32) * 5) / 9)
}

export default {
  conversionDegrees
}
