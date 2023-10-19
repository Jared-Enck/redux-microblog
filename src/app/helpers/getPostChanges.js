export default function getPostChanges(formData, postData) {
  const formEntries = Object.entries(formData);
  const initialEntries = Object.entries(postData);
  const updateData = {};

  const entries = formEntries.filter(
    ([key, val], idx) => val !== initialEntries[idx][1]
  );

  if (!entries.length) return -1;

  entries.map((entry) => (updateData[entry[0]] = entry[1]));

  return updateData;
}
