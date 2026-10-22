import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Receptionist+ — AI recepcionistka v jeziku stranke, povezana s koledarjem Jedro+";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const font = await readFile(join(process.cwd(), "src/app/fonts/NotoSans-Regular.ttf"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "65px 76px", background: "linear-gradient(135deg, #101420, #20243a 65%, #23434b)", color: "white", fontFamily: "Noto Sans" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ fontSize: 30 }}>Jedro+</span><span style={{ padding: "12px 22px", borderRadius: 50, background: "#34574e", color: "#baf3dd", fontSize: 18 }}>NOVO</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 27, color: "#bdb5ed", marginBottom: 20 }}>Receptionist+</span><span style={{ fontSize: 76, lineHeight: 1.08, letterSpacing: "-3px" }}>Vi delate.</span><span style={{ fontSize: 76, lineHeight: 1.08, letterSpacing: "-3px", color: "#c1bdff" }}>AI recepcionistka sprejme klic.</span></div>
      <div style={{ display: "flex", fontSize: 22, color: "#b9c4d4" }}>Pogovor v jeziku stranke · Termini, vprašanja in opomniki</div>
    </div>, { ...size, fonts: [{ name: "Noto Sans", data: font, style: "normal", weight: 400 }] }
  );
}
