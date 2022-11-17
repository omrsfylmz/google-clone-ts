export type Search = {
  title: string;
  snippet: string;
  link: string;
  displayLink: string;
  image: string;
  information: SearchInformation;
  pageMap: PageMap;
};

export type SearchInformation = {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
};

export type PageMap = {
  cse_thumbnail: CseThumbnail[];
  cse_image: CseImage[];
};

export type CseThumbnail = {
  src: string;
  width: string;
  height: string;
};

export type CseImage = {
  src: string;
};
