export function analyzeMarket() {
  return {
    trend: Math.random() > 0.5 ? "bullish" : "bearish",
    volatility: Math.random(),
  };
}
