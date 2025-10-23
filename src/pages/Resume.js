import ResumeItem from "../components/ResumeItem";
import NonprofitCard from "../components/NonprofitCard";

export default function Resume() {
  return (
    <>
      <NonprofitCard
        name="Fundación de Esperanza"
        description="Explore the mission, programs, and community impact."
        href="https://www.fundaciondeesperanza.org/about"
      />
      <header>
        <h1>Alvaro Montoro</h1>
        <p>
          Senior Software Engineer with strong experience creating high-quality,
          scalable, and high-performance web applications seeking front-end and
          full stack opportunities.
        </p>
      </header>

      <h2>Experience</h2>

      <ResumeItem
        name="athenahealth"
        dept="Healthcare IT"
        position="Member of Technical Staff"
        startDate="2017"
        endDate="2019"
      >
        <ul>
          <li>
            Developed widgets using React and Less to display patient
            information.
          </li>
          <li>
            Created design specifications; participated in design and code
            reviews.
          </li>
          <li>
            Worked on design and initial development of a new platform to import
            medical documents.
          </li>
          <li>
            Built a Kotlin microservice to generate XML documents based on a
            government-compliant architecture (CCDA).
          </li>
        </ul>
      </ResumeItem>

      <ResumeItem
        name="General Motors"
        dept="Cadillac.com Team"
        position="Web Developer"
        startDate="2015"
        endDate="2017"
      >
        <ul>
          <li>
            Developed new components for the award-winning website Cadillac.com
            and its mobile version.
          </li>
          <li>
            Collaborated with stakeholders to refine and negotiate product and
            functional specifications, product vision, and direction.
          </li>
          <li>
            Designed a web component that reduced page load speed by over 15%,
            improving SEO and accessibility while reducing authoring costs.
          </li>
          <li>
            Represented GM at volunteering events and competitions.
          </li>
        </ul>
      </ResumeItem>

      <ResumeItem
        name="MicroAssist"
        dept="Information Technology and Services"
        position="PHP Developer"
        startDate="2014"
        endDate="2015"
      >
        <ul>
          <li>
            Designed and developed accessibility-focused web projects, adding
            new features and enhancements.
          </li>
          <li>
            Created and integrated an automated mail system with 3rd-party APIs.
          </li>
          <li>
            Contributed to the translation project of the ITTD website for the
            Texas Department of Public Safety.
          </li>
        </ul>
      </ResumeItem>

      <ResumeItem
        name="Hewlett-Packard"
        dept="Content & Digital Asset Management"
        position="IT Engineer"
        startDate="2011"
        endDate="2014"
      >
        <ul>
          <li>
            Developed two internal content management systems for HP product
            documentation serving over three million monthly visitors.
          </li>
          <li>
            Coordinated with an overseas team, applying Agile methodologies to
            ensure on-time, on-spec delivery.
          </li>
          <li>
            Improved performance of multiple batch jobs, reducing execution time
            by over 50% and eliminating downtime.
          </li>
        </ul>
      </ResumeItem>
    </>
  );
}
