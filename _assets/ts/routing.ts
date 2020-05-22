import { history as historyRouter } from 'instantsearch.js/es/lib/routers';
import {
  getFallbackHitsPerPageRoutingValue,
  getFallbackSortByRoutingValue,
} from './widgets';

interface RouteState {
  query?: string;
  page?: string;
  tags?: string[];
  category?: string;
  date?: string;
  sortBy?: string;
  hitsPerPage?: string;
}

interface UiState {
  query?: string;
  page?: string;
  hierarchicalMenu?: {
    'hierarchicalCategories.lvl0'?: string[];
  };
  range?: {
    date?: string;
  };
  refinementList?: {
    tag?: string[];
  };
  sortBy?: string;
  hitsPerPage?: number;
}

const routeStateDefaultValues = {
  query: '',
  page: '1',
  tags: undefined,
  category: '',
  date: '',
  sortBy: 'instant_search',
  hitsPerPage: '20',
};

const encodedCategories = {
  Cameras: 'Cameras & Camcorders',
  Cars: 'Car Electronics & GPS',
  Phones: 'Cell Phones',
  TV: 'TV & Home Theater',
};

const decodedCategories = Object.keys(encodedCategories).reduce((acc, key) => {
  const newKey = encodedCategories[key];
  const newValue = key;

  return {
    ...acc,
    [newKey]: newValue,
  };
}, {});

// Returns a slug from the category name.
// Spaces are replaced by "+" to make
// the URL easier to read and other
// characters are encoded.
function getCategorySlug(name: string): string {
  const encodedName = decodedCategories[name] || name;

  return encodedName
    .split(' ')
    .map(encodeURIComponent)
    .join('+');
}

// Returns a name from the category slug.
// The "+" are replaced by spaces and other
// characters are decoded.
function getCategoryName(slug: string): string {
  const decodedSlug = encodedCategories[slug] || slug;

  return decodedSlug
    .split('+')
    .map(decodeURIComponent)
    .join(' ');
}

const originalWindowTitle = document.title;

const router = historyRouter({
  windowTitle({ category, query }) {
    const queryTitle = query ? `Results for "${query}"` : '';

    return [queryTitle, category, originalWindowTitle]
      .filter(Boolean)
      .join(' | ');
  },

  createURL({ qsModule, routeState, location }): string {
    const { protocol, hostname, port = '', pathname, hash } = location;
    const portWithPrefix = port === '' ? '' : `:${port}`;
    const urlParts = location.href.match(/^(.*?)\/search/);
    const baseUrl =
      (urlParts && urlParts[0]) ||
      `${protocol}//${hostname}${portWithPrefix}${pathname}search`;

    const categoryPath = routeState.category
      ? `${getCategorySlug(routeState.category)}/`
      : '';
    const queryParameters: Partial<RouteState> = {};

    if (
      routeState.query &&
      routeState.query !== routeStateDefaultValues.query
    ) {
      queryParameters.query = encodeURIComponent(routeState.query);
    }
    if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
      queryParameters.page = routeState.page;
    }
    if (
      routeState.tags &&
      routeState.tags !== routeStateDefaultValues.tags
    ) {
      queryParameters.tags = routeState.tags.map(encodeURIComponent);
    }
    if (
      routeState.date &&
      routeState.date !== routeStateDefaultValues.date
    ) {
      queryParameters.date = routeState.date;
    }
    if (
      routeState.sortBy &&
      routeState.sortBy !== routeStateDefaultValues.sortBy
    ) {
      queryParameters.sortBy = routeState.sortBy;
    }
    if (
      routeState.hitsPerPage &&
      routeState.hitsPerPage !== routeStateDefaultValues.hitsPerPage
    ) {
      queryParameters.hitsPerPage = routeState.hitsPerPage;
    }

    const queryString = qsModule.stringify(queryParameters, {
      addQueryPrefix: true,
      arrayFormat: 'repeat',
    });

    return `${baseUrl}/${categoryPath}${queryString}${hash}`;
  },

  parseURL({ qsModule, location }): RouteState {
    const pathnameMatches = location.pathname.match(/search\/(.*?)\/?$/);
    const category = getCategoryName(
      (pathnameMatches && pathnameMatches[1]) || ''
    );
    const queryParameters = qsModule.parse(location.search.slice(1));
    const {
      query = '',
      page = 1,
      tags = [],
      date,
    } = queryParameters;
    // `qs` does not return an array when there's a single value.
    const alltags = Array.isArray(tags) ? tags : [tags].filter(Boolean);
    const hitsPerPage = getFallbackHitsPerPageRoutingValue(
      queryParameters.hitsPerPage
    );
    const sortBy = getFallbackSortByRoutingValue(queryParameters.sortBy);

    return {
      query: decodeURIComponent(query),
      page,
      tags: alltags.map(decodeURIComponent),
      category,
      date,
      sortBy,
      hitsPerPage,
    };
  },
});

const getStateMapping = ({ indexName }) => ({
  stateToRoute(uiState: UiState): RouteState {
    const indexUiState = uiState[indexName];
    return {
      query: indexUiState.query,
      page: indexUiState.page,
      tags: indexUiState.refinementList && indexUiState.refinementList.tag,
      category:
        indexUiState.hierarchicalMenu &&
        indexUiState.hierarchicalMenu['hierarchicalCategories.lvl0'] &&
        indexUiState.hierarchicalMenu['hierarchicalCategories.lvl0'].join('/'),
      date: indexUiState.range && indexUiState.range.date,
      sortBy: indexUiState.sortBy,
      hitsPerPage:
        (indexUiState.hitsPerPage && String(indexUiState.hitsPerPage)) ||
        undefined,
    };
  },

  routeToState(routeState: RouteState): UiState {
    return {
      [indexName]: {
        query: routeState.query,
        page: routeState.page,
        hierarchicalMenu: {
          'hierarchicalCategories.lvl0':
            (routeState.category && routeState.category.split('/')) ||
            undefined,
        },
        refinementList: {
          tag: routeState.tags,
        },
        range: {
          date: routeState.date,
        },
        sortBy: routeState.sortBy,
        hitsPerPage: Number(routeState.hitsPerPage),
      },
    };
  },
});

const getRouting = ({ indexName }) => ({
  router,
  stateMapping: getStateMapping({ indexName }),
});

export default getRouting;
