function loop_size(node) {
  let set = new Set();
  let size = 0;
  let n = node;
  const start = node;
  
  while (!set.has(n)) {    
    set.add(n);
    n = n.next;
    size++;
  }

  let tailSize = size
  while (set.has(n)) {
    set.delete(n)
    n = n.next
    tailSize--;
  }

  return size - tailSize;
}

export default loop_size;
