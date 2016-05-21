function map(array, transformFn) {
  return array.reduce((prev, curr) => {
      prev.push(transformFn(curr));
      return prev;
  }, []);
}

console.log(map([1,2,3], x => x*2));