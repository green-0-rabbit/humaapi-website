/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line consistent-return
const isKeyExists = (obj: Object, key: string) => {
  // eslint-disable-next-line no-prototype-builtins
  if (obj.hasOwnProperty(key)) {
    return key;
  }
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shakingData = (data: any, dirtyFields: any) => {
  const activFields: any = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const activeKey = isKeyExists(dirtyFields, key);
      if (activeKey) {
        activFields[activeKey] = data[key];
      }
    }
  }
  return JSON.stringify(activFields);
};

export default shakingData;
