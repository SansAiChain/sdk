import { analyzeMarket } from "../../core/analytics/market";
import { think } from "../../core/ai/brain";

export function runBot() {
  const market = analyzeMarket();
  const decision = think(market);
  console.log("Bot Decision:", decision);
}
