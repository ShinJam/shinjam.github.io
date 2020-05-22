import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
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
} from './widgets';
import getRouting from './routing';
import crediantial from './credential';

const searchClient = algoliasearch(
  crediantial.application_id,
  crediantial.search_key
);

const search = instantsearch({
  indexName: crediantial.index_name,
  searchClient,
  routing: getRouting({ indexName: crediantial.index_name }),
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
