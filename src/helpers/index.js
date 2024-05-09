export const getImageUrlsWithGroupDescription = (apiData) => {
  if (!apiData || !apiData.data || !apiData.data.rows) {
    return [];
  }

  return apiData.data.rows.map((item) => {
    const images = JSON.parse(item.Images || "[]");
    const urls = images.map((image) => image.FullUrl);
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


