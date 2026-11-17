import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
export const metadata: Metadata = { title: "Gallery" };
const photos = [
  ["Campus & surroundings","https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=85"],
  ["Learning spaces","https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"],
  ["A place to discover","https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"],
  ["Learning together","https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85"],
  ["Ideas in motion","https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"],
  ["The joy of learning","https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1000&q=85"],
];
export default function GalleryPage() {
 return <main><PageHero eyebrow="A GLIMPSE OF SCHOOL LIFE" title="Moments that" emphasis="make memories." description="A gallery is where a school community can share its everyday moments, celebrations and milestones." />
  <section className="section"><div className="wrap"><div className="gallery-intro"><div className="eyebrow"><span /> THE SCHOOL IN PICTURES</div><p>These are temporary design images, not photographs of United School of Excellence. Replace them with school-approved campus and activity photographs before launch.</p></div><div className="gallery-grid">{photos.map(([title,url],i)=><figure className={`gallery-item gallery-${i+1}`} key={title}><img src={url} alt={title} /><figcaption>{title}<span>0{i+1}</span></figcaption></figure>)}</div></div></section>
 </main>;
}