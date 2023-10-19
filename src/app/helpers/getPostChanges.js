export default function getPostChanges(formData, postData) {
  const formVals = Object.values(formData);
  const initialVals = Object.values(postData);

  const values = formVals.filter((val, idx) => val !== initialVals[idx]);

  return values.length > 0;
}
