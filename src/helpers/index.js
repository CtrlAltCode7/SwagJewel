export const getImageUrlsWithGroupDescription = (apiData) => {
  console.log('@@@@@@@@', apiData);
  if (!apiData || !apiData.message == "Failed") {
    return [];
  }

  return apiData.data.Products.map((item) => {
    const images = item.Images;
    console.log('@@@@', images)
    const urls = images.map((image) => image.FullUrl);
    console.log('@@@@@@', urls)
    return {
      urls: urls || [],
      groupDescription: item.GroupDescription || "", 
    };
  });
};

export async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}


