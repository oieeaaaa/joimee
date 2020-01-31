const includeAsset = data => {
  // data should be an array and data should contains "includes" property
  if (!(data.sys.type === 'Array' && 'includes' in data)) return data;
  if (data.items.length < 0) return data;

  const assetList = data.includes.Asset.reduce((assets, asset) => ({
    [asset.sys.id]: asset.fields,
  }), {});

  // include the asset to the field/s that has it.
  const items = data.items.map(({ fields, ...rest }) => {
    // check each field that has an asset
    const newFields = Object.keys(fields).reduce((fieldsWithAsset, fieldName) => {
      const field = fields[fieldName];
      // only field that contains sys should have an asset.
      if (!(typeof field === 'object' && 'sys' in field)) return fieldsWithAsset;

      // include the asset
      if (field.sys.linkType === 'Asset') {
        return ({
          ...fieldsWithAsset,
          [fieldName]: {
            ...field,
            asset: assetList[field.sys.id],
          },
        });
      }

      return fieldsWithAsset;
    }, {});

    return ({
      fields: {
        ...fields,
        ...newFields,
      },
      ...rest,
    });
  });

  return {
    ...data,
    items,
  };
};


export default includeAsset;
