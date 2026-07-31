import { bootstrapJs } from "./client/bootstrap.js";
import { desktopAgentsJs } from "./client/desktopAgents.js";
import { documentsWindowsJs } from "./client/documentsWindows.js";
import { infiniteCanvasJs } from "./client/infiniteCanvas.js";

export function clientJs() {
  return [
    bootstrapJs(),
    desktopAgentsJs(),
    infiniteCanvasJs(),
    documentsWindowsJs(),
  ].join("");
}
