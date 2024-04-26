export const getImageUrlsWithGroupDescription = (apiData) => {
  if (!apiData || !apiData.data || !apiData.data.rows) {
    return [];
  }

  return apiData.data.rows.map((item) => {
    const images = JSON.parse(item.Images || "[]"); // Parsing the JSON string
    // Extracting URLs from the images array
    const urls = images.map((image) => image.FullUrl);
    return {
      urls: urls || [],
      groupDescription: item.GroupDescription || "", // Assuming the groupdescription field exists in your data
    };
  });
};
