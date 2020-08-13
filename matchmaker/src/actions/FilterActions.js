export const TOGGLE_FILTER = "[FILTER] TOGGLE_FILTER";
export const SET_DATA = "[FILTER] SET_DATA";

export function toggleFilter(show) {
  return {
    type: TOGGLE_FILTER,
    show: show
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    data: data
  };
}
