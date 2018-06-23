const apiUrl = 'http://localhost:8000';

export const contactsListUrl = () => `${apiUrl}/contacts`;
export const contactItemUrl = index =>
  `${contactsListUrl()}/${index}`;
