export function think(marketData: any) {
  return {
    action: marketData.trend === "bullish" ? "BUY" : "HOLD",
    confidence: Math.random().toFixed(2),
  };
}
