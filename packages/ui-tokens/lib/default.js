/**
 * @description Default Design Tokens
 *
 * @todo This folder should be converted to a package when this Repo is changed to a
 *  Lerna monorepo. Multiple token files should be created for any additional designs
 *  introduced.
 */
export const basePalette = {
    red: '#F4443C',
    orange: '#F86E21',
    green: '#52C41A',
    greenLight: '#529939',
    blueLight: '#3AA3FF',
    blue: '#005DFF',
    blueMedium: '#1890FF',
    yellow: '#FFD21D',
    pink: '#FF00A1',
    redLight: '#FBF5F5',
    orangeLight: '#FFF7E3',
    white: '#FFFFFF',
    black: '#000000',
    grayDark: '#52566E',
    transparent: 'transparent',
};
export const palette = {
    ...basePalette,
    cyan: '#E5F1FF',
    dark: '#333333',
    darkMedium: '#666666',
    darkLight: '#999999',
    grayMedium: '#CCCCCC',
    grayLight: '#E5E5E5',
};
export const darkPalette = {
    ...basePalette,
    dark: '#121212',
    blueDark: '#141D24',
    orangLight: '#292929',
    grey: '#dddddd',
};
//# sourceMappingURL=default.js.map