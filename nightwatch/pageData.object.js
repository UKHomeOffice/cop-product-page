module.exports = {
  homepage: {
    title: "//h1[@class='govuk-heading-xl panel-heading'][text()='Easily capture data, make better decisions']"
  },
  about: {
    titles: {
      about_Cop_title: "//h2[@class='govuk-heading-l'][text()='About COP']",
      benefits_title: "//h2[@class='govuk-heading-l'][text()='How COP helps you']",
      roadmap_title: "//h2[@class='govuk-heading-l'][text()='Roadmap']",
      security_title: "//h2[@class='govuk-heading-l'][text()='Security']"
    },
    buttons: {
      about_nav_button: "//a[@class='govuk-header__link header-nav-items'][text()='About']",
      benefits_nav_button: "//span[text()='How COP helps you']",
      roadmap_nav_button: "//span[text()='Roadmap']",
      security_nav_button: "//span[text()='Security']"
    }
  },
  help: {
    get_started: {title: "//h1[@class='govuk-heading-help-sub-title'][text()='Get started']", button: "//a[@class='govuk-header__link header-nav-items'][text()='Help']"},
    oar: {
      overview: {title: "//h1[@class='govuk-heading-help-sub-title'][text()='Operational Activity Reporting  (OAR)']/self::h1", button: "//span[text()='Operational Activity Reporting (OAR)']"},
      before_you_begin: {title: "//h3[@class='govuk-heading-m'][text()='Before you begin']", button: "//span[text()='Before you begin']"},
      enter_time_and_shift_details: {title: "//h3[@class='govuk-heading-m'][text()='Enter time and shift details']", button: "//span[text()='Enter shift details and time']"},
      understand_activity_categories: {title: "//h3[@class='govuk-heading-m'][text()='Understand activity categories']", button: "//span[text()='Understand activity categories']"},
      detection_search_activities: {title: "//h3[@class='govuk-heading-m'][text()='Detection/search activities']", button: "//span[text()='Detection/search activities']"},
      check_your_OAR_submission: {title: "//h3[@class='govuk-heading-m'][text()='Check your OAR submission']", button: "//span[text()='Check your OAR submission']"}
    },
    mandec: {
      overview: {title: "//h1[@class='govuk-heading-help-sub-title'][text()='Mandatory Declarations']", button: "//span[text()='Mandatory Declarations']"},
      add_your_line_manager: {title: "//h3[@class='govuk-heading-m'][text()='Add your line manager']", button: "//span[text()='Add your line manager']"},
      if_you_have_something_to_declare: {title: "//h3[@class='govuk-heading-m'][text()='If you have something to declare']", button: "//span[text()='If you have something to declare']"},
      what_line_managers_need_to_do: {title: "//h3[@class='govuk-heading-m'][text()='What Line Managers need to do']", button: "//span[text()='What Line Managers need to do']"}
    },
    uaf: {
      overview: {title: "//h1[@class='govuk-heading-help-sub-title'][text()='Use of Force']", button: "//span[text()='Use of Force']"},
      before_you_begin: {title: "//h3[@class='govuk-heading-m'][text()='Before you begin']", button: "//span[text()='Before you begin']"},
      when_you_must_report_use_of_force: {title: "//h3[@class='govuk-heading-m'][text()='When you must report use of force']", button: "//span[text()='When you must report use of force']"},
      personal_safety_training_terms: {title: "//h3[@class='govuk-heading-m'][text()='Personal Safety Training terms']", button: "//span[text()='Personal Safety Training terms']"}
    },
    contact: {
      overview: {title: "//h1[@class='govuk-heading-help-sub-title'][text()='Contact']", button: "//span[text()='Contact']"}
    }
  }
};
