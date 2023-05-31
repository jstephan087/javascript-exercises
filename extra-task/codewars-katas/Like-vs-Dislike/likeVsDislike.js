function likeOrDislike(buttons) {
  return buttons.reduce(
    (previousState, currentState) =>
      previousState === currentState ? "Nothing" : currentState,
    "Nothing"
  );
}
