const displayDistance = (distance) => {
  if (distance >= 1000) {
    return `${distance / 1000}km`;
  } else {
    return `${distance}m`;
  }
};

export { displayDistance };
