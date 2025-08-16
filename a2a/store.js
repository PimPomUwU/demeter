// a2a/store.js
const history = [];

export function saveExchange(message) {
  history.push(message);
}

export function getHistory(filter = {}) {
  return history.filter(msg => {
    if (filter.from && msg.from_agent !== filter.from) return false;
    if (filter.to && msg.to_agent !== filter.to) return false;
    return true;
  });
}
