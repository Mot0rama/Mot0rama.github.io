function getLinks(album, count) {
  const imagesNames = new Array(count).fill(0).map((_, i) => i + 1);
  return imagesNames
    .map(name => `/react-gh-pages/photo/${album}/ ${name}.jpg`)
    .map(src => ({ src }));
}

const album1 = getLinks(1, 18);

const album2 = getLinks(2, 17);

const album3 = getLinks(3, 17);

const album4 = getLinks(4, 26);

const album5 = getLinks(5, 21);

const album6 = getLinks(6, 22);

const album7 = getLinks(7, 14);

const album8 = getLinks(8, 16);

const album9 = getLinks(9, 12);

const album10 = getLinks(10, 16);

const album11 = getLinks(11, 5);

const album12 = getLinks(12, 11);

const album13 = getLinks(13, 13);

const album14 = getLinks(14, 19);

const album15 = getLinks(15, 19);

const album16 = getLinks(16, 12);

const album17 = getLinks(17, 15);

const album18 = getLinks(18, 11);

export const albums = {
  "001": album1,
  "002": album2,
  "003": album3,
  "004": album4,
  "005": album5,
  "006": album6,
  "007": album7,
  "008": album8,
  "009": album9,
  "010": album10,
  "011": album11,
  "012": album12,
  "013": album13,
  "014": album14,
  "015": album15,
  "016": album16,
  "017": album17,
  "018": album18
};
