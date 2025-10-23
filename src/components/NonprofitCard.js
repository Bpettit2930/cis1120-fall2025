export default function NonprofitCard({
  name = "Fundación de Esperanza",
  description = "Learn about Fundación de Esperanza's mission and impact.",
  href = "https://www.fundaciondeesperanza.org/about",
  logoUrl
}) {
  return (
    <a
      className="nonprofit-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} – opens in a new tab`}
   >
      {logoUrl && (
        <img className="nonprofit-card__logo" src={logoUrl} alt={`${name} logo`} />
      )}
      <div className="nonprofit-card__content">
        <div className="nonprofit-card__title">
          {name}
          <span className="nonprofit-card__external" aria-hidden>
            ↗
          </span>
        </div>
        <p className="nonprofit-card__desc">{description}</p>
      </div>
    </a>
  );
}


