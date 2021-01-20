function getFirstNotRepeating(str) {
    const set = new Set();
  const finalSet = new Set();
  str.split('').forEach(char => {
    if (set.has(char)) finalSet.delete(char);
    else {
      set.add(char);
      finalSet.add(char);
    }
  })
  const iter = finalSet.values();
  return iter.next().value;
}
console.log(getFirstNotRepeating("abanibiabohebe")); 