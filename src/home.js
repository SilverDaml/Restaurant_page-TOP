// Importing pageLoad function from page-load.js
import pageLoad from "./page-load";

// Exporting home function
export default () => {
  // Simply return the pageLoad function
  return pageLoad();
};
