let number = 10;

next:for (let i = 2; i <= number; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }
  alert( i );
}