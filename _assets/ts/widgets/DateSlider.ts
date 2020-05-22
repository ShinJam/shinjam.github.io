import { panel, rangeSlider } from 'instantsearch.js/es/widgets';
import { collapseButtonText } from '../templates/panel';

const dateRangeSlider = panel({
  templates: {
    header: 'Date',
    collapseButtonText,
  },
  collapsed: () => false,
})(rangeSlider);

function getFormatDate(date){
  var year = date.getFullYear();              //yyyy
  var month = (1 + date.getMonth());          //M
  month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
  return year + '-' + month;
}

export const dateSlider = dateRangeSlider({
  container: '[data-widget="date-range"]',
  attribute: 'date',
  pips: false,
  tooltips: {
    format(value) {
      var date = new Date(value * 1000);
      return `${getFormatDate(date)}`
    },
  },
});
