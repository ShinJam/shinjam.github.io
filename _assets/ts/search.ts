import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import {
  tags,
  categories,
  clearFilters,
  clearFiltersEmptyResults,
  clearFiltersMobile,
  configuration,
  hitsPerPage,
  pagination,
  dateSlider,
  products,
  resultsNumberMobile,
  saveFiltersMobile,
  searchBox,
  sortBy,
} from "./widgets";
import getRouting from "./routing";
// import credential from "./credential";
const credential = {
  application_id: "1YLEN0QM8Z",
  search_key: "9b6553e7658d9ff15e97dad1e7370ab5",
  index_name: "dev_shinjam",
};

const searchClient = algoliasearch(
  credential.application_id,
  credential.search_key
);

const search = instantsearch({
  indexName: credential.index_name,
  searchClient,
  routing: getRouting({ indexName: credential.index_name }),
});

search.addWidgets([
  tags,
  categories,
  clearFilters,
  clearFiltersEmptyResults,
  clearFiltersMobile,
  configuration,
  hitsPerPage,
  pagination,
  dateSlider,
  products,
  resultsNumberMobile,
  saveFiltersMobile,
  searchBox,
  sortBy,
]);

export default search;
