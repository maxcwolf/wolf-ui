/** 24x24 stroke icons, drawn for wolf-ui. Each entry is the `d` of one or more paths. */
export const iconPaths = {
  alert: ['M12 3.5 2.5 20h19L12 3.5Z', 'M12 10v4', 'M12 17v.5'],
  'arrow-right': ['M4 12h16', 'm13 5 7 7-7 7'],
  check: ['m5 12.5 4.5 4.5L19 7.5'],
  'chevron-down': ['m5 9 7 7 7-7'],
  'chevron-left': ['m15 5-7 7 7 7'],
  'chevron-right': ['m9 5 7 7-7 7'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z', 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z'],
  'eye-off': [
    'm3 3 18 18',
    'M10.6 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2',
    'M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7c1.9 0 3.6-.6 5-1.5',
    'M9.9 9.9a3 3 0 0 0 4.2 4.2',
  ],
  info: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'M12 11v5', 'M12 7.5v.5'],
  minus: ['M5 12h14'],
  plus: ['M12 5v14', 'M5 12h14'],
  search: ['M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z', 'm15.5 15.5 4.5 4.5'],
} as const satisfies Record<string, readonly string[]>;

export type IconName = keyof typeof iconPaths;

export const iconNames = Object.keys(iconPaths) as IconName[];

export const iconSizes = { s: 16, m: 20, l: 24 } as const;

export type IconSize = keyof typeof iconSizes;
