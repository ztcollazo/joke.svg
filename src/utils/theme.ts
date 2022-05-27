export interface Theme {
  color: string,
  backgroundColor: string,
  borderColor: string,
}

const themes: Record<string, Theme> = {
  nord: {
    backgroundColor: '#2e3440',
    color: '#d8dee9',
    borderColor: '#d8dee9',
  },
  default: {
    backgroundColor: 'whitesmoke',
    color: 'indianred',
    borderColor: 'indianred',
  },
  dark: {
    backgroundColor: '#454545',
    borderColor: 'lightblue',
    color: 'lightblue',
  },
};

const theme = (name: string): Theme => {
  return themes[name];
};

export default theme;
