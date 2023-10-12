function solution(new_id) {
  const newId = new_id
    .toLowerCase()
    .replace(/[^\w_.-]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^[.]+/, '')
    .replace(/[.]+$/, '')
    .replace(/^$/, 'a')
    .substring(0, 15)
    .replace(/[.]+$/, '');

  return newId.padEnd(3, newId[newId.length - 1]);
}

