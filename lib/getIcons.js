import * as simpleIcons from "simple-icons";

 export const getSimpleIcon = (slug) => {
    const iconKey = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
    return simpleIcons[iconKey];
  };