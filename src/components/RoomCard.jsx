import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RoomCard({ room }) {
  const { t } = useTranslation();

  return (
    <article className="card overflow-hidden shine-wrap">
      <img
        src={room.cover}
        alt={room.name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{room.name}</h3>
          <span className="text-accent font-bold">
            {room.price}€{" "}
            <span className="text-sm font-normal text-ink/70">
              {t("roomCard.perNight")}
            </span>
          </span>
        </div>

        <p className="text-sm text-ink/70 mb-3">
          {room.size}m² · {room.capacity} {t("roomCard.guests")}
        </p>

        <div className="flex items-center gap-3">
          <Link to={`/rooms/${room.slug}`} className="btn-ghost">
            {t("roomCard.details")}
          </Link>
        </div>
      </div>
    </article>
  );
}
