export const formatGAErrorString = (error: Error) =>
  `[${error.name + ':'}${error.message.replaceAll(/[^a-zA-Z0-9\s]/g, '')}]`;
