let modId = 0;
let pageId = 0;

const getModId = () => {
  modId += 1;
  return `MOD${modId}`;
};

const getPageId = () => {
  pageId += 1;
  return `MOD${pageId}`;
};

export { getModId, getPageId };

