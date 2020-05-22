import { sortBy as sortByWidget } from 'instantsearch.js/es/widgets';

const items = [
  {
    label: 'Featured',
    value: 'dev_shinjam',
  },
  {
    label: 'Date ascending',
    value: 'dev_shinjam_date_asc',
  },
  {
    label: 'Date descending',
    value: 'dev_shinjam_date_desc',
  },
];

export const sortBy = sortByWidget({
  container: '[data-widget="sort-by"]',
  attribute: 'date',
  items,
});

export function getFallbackSortByRoutingValue(
  sortByValue: string
): string | undefined {
  if (items.map(item => item.value).indexOf(sortByValue) !== -1) {
    return sortByValue;
  }

  return undefined;
}
