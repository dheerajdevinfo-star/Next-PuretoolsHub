import { House } from "lucide-react"
import Link from "next/link"

export default function Card({ title, description, icon: Icon, icon_color, icon_bg, url }) {
  return (
    <Link href={url} className="card">
      <div className="card_icon_box" style={{ backgroundColor: icon_bg }}>
        <Icon strokeWidth={1.5} color={icon_color} />
      </div>
      <div className="card_information">
        <h2 className="card_title">
          {title}
        </h2>
 
        <p className="card_description">
          {description}
        </p>
      </div>
    </Link >
  );
} 