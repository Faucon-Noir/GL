// CONFIGS
export const background = [
  { src: 'assets/background/background.png', alt: 'default', width: 1280, height: 720 },
  {
    src: 'assets/background/AUE_BACKGROUNDS_FRANCE-20.png',
    alt: 'GGTech Sombre',
    width: 1920,
    height: 1080
  },
  {
    src: 'assets/background/AUE_BACKGROUNDS_FRANCE-19.png',
    alt: 'GGTech Clair',
    width: 1920,
    height: 1080
  }
]

// ASSETS
export const assetsList = [
  { src: 'assets/image/03-BARON_LOGO.png', alt: 'Assets' },
  { src: 'assets/image/04-DRAGON_LOGO.png', alt: 'Assets' },
  { src: 'assets/image/05-HERAUT_LOGO.png', alt: 'Assets' },
  { src: 'assets/image/06-CARAP_LOGO.png', alt: 'Assets' },
  { src: 'assets/image/07-BEEMO MORT.png ', alt: 'Assets' },
  { src: 'assets/image/08-BOMBE.png', alt: 'Assets' },
  { src: 'assets/image/09-COURONNE.png', alt: 'Assets' },
  { src: 'assets/image/10-DRAGON_MORT.png', alt: 'Assets' },
  { src: 'assets/image/11-ÉPÉE.png', alt: 'Assets' },
  { src: 'assets/image/12-GANK_TYPO.png', alt: 'Assets' },
  { src: 'assets/image/13-LE_CHAT.png', alt: 'Assets' },
  { src: 'assets/image/14-CRANE.png', alt: 'Assets' },
  { src: 'assets/image/15-VERSUS.png', alt: 'Assets' },
  { src: 'assets/image/16-VICTOIRE.png', alt: 'Assets' }
]

// TEAMS
export const teamsList = [
  { src: 'assets/image/team/equipe_test.png', alt: 'test' },
  { src: 'assets/image/team/leTrioInfernal.jpeg', alt: 'trio' },
  { src: 'assets/image/team/team2.png', alt: 'team2' }
]

export const imageList = [assetsList, teamsList]

// CONFIG FOR IMAGELIST COMPONENT
export const imageListConfig = [
  {
    id: 1,
    name: 'Background',
    src: background
  },
  {
    id: 2,
    name: 'Teams Assets',
    src: teamsList
  },
  {
    id: 3,
    name: 'Assets',
    src: assetsList
  }
]
