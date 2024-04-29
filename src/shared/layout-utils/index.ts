const paths = [
  {
    name: "Mezunlarımız",
    path: "/alumnies",
  },
  {
    name: "İş İlanları",
    path: "/job-postings",
  },
  {
    name: "Hakkımızda",
    path: "/about",
  },
  {
    name: "İletişim",
    path: "/contact",
  },
  {
    name: "Anasayfa",
    path: "/home",
  },
  {
    name: "Profil",
    path: "/profile",
  },
];

const getNameByPath = (path: string): string => {
  const pathObj = paths.find((p) => path.includes(p.path));
  return pathObj ? pathObj.name : "";
};

export { paths, getNameByPath };
