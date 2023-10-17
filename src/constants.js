const BREAKPOINTS = {
  mobileMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
}

export const QUERIES = {
  'mobileAndDown': `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}