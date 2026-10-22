import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
export const alt = 'Jedro+ — booking, clients and AI in one place';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default async function Image() {
  const font = await readFile(join(process.cwd(), 'src/app/fonts/NotoSans-Regular.ttf'));
  return new ImageResponse(<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'65px 76px',background:'linear-gradient(135deg,#101420,#20243a 65%,#23434b)',color:'white',fontFamily:'Noto Sans'}}><span style={{fontSize:44}}>Jedro+</span><div style={{display:'flex',flexDirection:'column',gap:22}}><span style={{fontSize:66,lineHeight:1.15}}>More time for your clients.</span><span style={{fontSize:34,color:'#c1bdff'}}>Booking, reminders and AI in one place.</span></div><span style={{fontSize:24,color:'#b9c4d4'}}>Made for service businesses.</span></div>, {...size,fonts:[{name:'Noto Sans',data:font,style:'normal',weight:400}]});
}
