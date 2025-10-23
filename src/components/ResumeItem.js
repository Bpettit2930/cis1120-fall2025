export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  children
}) {
  return (
    <section>
      <header>
        <h3>{name}</h3>
        {dept && <p>{dept}</p>}
      </header>
      {position && <h4>{position}</h4>}
      {(startDate || endDate) && (
        <p>
          {startDate && <time dateTime={String(startDate)}>{startDate}</time>}
          {(startDate && (endDate || endDate === undefined)) && " \u2013 "}
          <time dateTime={String(endDate || "Present")}>
            {endDate || "Present"}
          </time>
        </p>
      )}
      {children && <div>{children}</div>}
    </section>
  );
}
