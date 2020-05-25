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
import credential from "./credential";

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
