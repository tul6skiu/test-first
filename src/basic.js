export default function calculateAndGetHealthIndecator(healthInfo) {
  if (healthInfo.health > 50) {
    return 'healthy';
  } if (healthInfo.health >= 15 && healthInfo.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
