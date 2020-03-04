import React from "react";
import ExtraLargeTitle from "./extra-large-title";
import Image from "./image";
import LargeParagraph from "./large-paragraph";
import { Link } from "gatsby";

const Panel = (props) => (
  <div className="govuk-panel">
    <div className="govuk-width-container" style={{ marginTop: "50px" }}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <ExtraLargeTitle isPanel={true} text={props.title}/>
          <LargeParagraph isPanel={true} text={props.paragraphText}/>
          <div className="button-container">
            <Link to="/about_sub_pages/cop" role="button" draggable="false"
               className="govuk-button product-page-button button-container__button govuk-!-margin-right-3">
              Find out more
            </Link>
            or &nbsp;<a  style={{color: 'white'}} className="govuk-link" href="https://sso.digital.homeoffice.gov.uk/auth/realms/cop-prod/protocol/saml?SAMLRequest=jZJRb9sgFIX%2FCuLdxna81EZxqqxR1UjtFjXuHvYyEfs6QcXgcSHd%2Fv2ovUyZtFV9hXO%2Fc7iHxfWPXpETWJRGVzSNE0pAN6aV%2BlDRp%2Fo2Kuj1coGiVwNfeXfUj%2FDdAzoS5jTy8aKi3mpuBErkWvSA3DV8t3q451mc8MEaZxqjKFkhgnXB6MZo9D3YHdiTbODp8b6iR%2BcG5IyhHwZjXdyYIT6aHkzXBUl8MKfYP7NB%2BYPUyALopMCxV38mQi5K1iGV1MKND%2FlDQxO38iCdUP%2BgvQ4yC0L1yIJfFKK27Jx3ZFOyWVf0W9m1bQmzokmyPG%2BuZvt9uS%2Fa7ipP5iXMuyLIED1sNDqhXUWzJEuiZBYleZ3OeV7wbB6n5YevlGx%2F0z9KPe34rdXtJxHyu7reRtvPu5qSL%2BeugoBOzfDR3F5U8jZWnHugy3dtfcEuXCbLbOCfAnez3holm58X1tn7v4NS5uUmrN9BRZ31QMmtsb1w%2FwekcTqeyDbqRin3GgdoZCehpWw5Jf37py5%2FAQ%3D%3D&RelayState=%2F&SigAlg=http%3A%2F%2Fwww.w3.org%2F2001%2F04%2Fxmldsig-more%23rsa-sha256&Signature=fSkVl%2FcTPJGkqskrqkWzOhF0PXXuJig9BPdKo9w6%2FbZpzfxJYEswDmW%2FUBeH7AhcjlafgFWVftrW%0ArYn9FeQsMCjYIF7XQRRvZ0NzDkj0crroe6wYRIULft84sI4piN46%2BydeUMhJgdelyYtP9rj5vwmo%0A4wettQtQhI28C%2BMucCHwM%2FL6fSlkyc5fW%2BO7sJ9cmeCcerpYQw%2BWF8%2B8aS5UzBn9kNieWLvVZ1xr%0ApfxMFcdFVWni2xmwWJ42fad">sign in to COP if you want to use it</a>
          </div>
        </div>
        <div className="govuk-grid-column-one-third">
          <Image source={props.imageSource} height={props.imageHeight} width={props.imageWidth} alt={props.imageAlt}/>
        </div>
      </div>
    </div>
  </div>
);

export default Panel;