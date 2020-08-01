export const changeObjInArray = (
  items,
  itemPropName,
  itemId,
  newObj
) => {
  return items.map((item) => {
    console.log(item[itemPropName]);
    if (item[itemPropName] === itemId) {
      return { ...item, ...newObj };
    }
    return item;
  });
};
