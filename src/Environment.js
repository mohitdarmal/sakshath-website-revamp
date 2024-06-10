const prod = {
    API_BASE_URL: process.env.PREPORD_BASE_API_URL,
  };
  const API_BASE_URL = process.env.PREPORD_BASE_API_URL;
  console.log(process.env.PREPORD_BASE_API_URL);
  const preProd = {
    SEO_DATA: `${API_BASE_URL}/seo`,
  };
  const environment = preProd;
  export default environment;