function stringLength(string) {
  const length = string.length;
  if (length === 0) {
    throw new Error('String must be at least 1 character');
  } else if (length > 10) {
    throw new Error('String must not be than 10 characters');
  }
  return length;
}

export default stringLength;
