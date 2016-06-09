export function setState(state) {
  return { type: 'SET_STATE', state };
}

export function vote(entry) {
  const meta = { remote: true };
  return { type: 'VOTE', meta, entry };
}

export function next() {
  const meta = { remote: true}
  return { type: 'NEXT', meta };
}
