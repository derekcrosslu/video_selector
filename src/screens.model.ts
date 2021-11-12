export interface Details {
  id: string;
  type: string;
  config: {
    assetPath: string;
    sizeTemplate: string;
    views: {
      id: string;
      type: string;
      url?: string;
      files: {
        type: string;
        codecs: string;
        url: string;
      }[];
      area: string;
      clickParams: { value: string };
    }[];
  };
}

export interface Views {
  id: string;
  type: string;
  thumbnail: string;
  title: string;
  description: string;
  info: string;
}

export interface Screens {
  Selector: Views[];
  BrandWrapper: Details[];
}

export interface PlayerElements {
  header_image_base_url: string;
  header_image_url: string;
  video_title: string;
  video_description: string;
  video_duration: string;
  video_thumbnail: string;
  video_file_url: string;
}
