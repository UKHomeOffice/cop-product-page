const activeEnv = process.env.GATSBY_ACTIVE_ENV || "PROD";

export const COPSite = activeEnv === 'PROD' ? 'https://www.cop.homeoffice.gov.uk/' : 'https://staging.cop.homeoffice.gov.uk/dashboard';