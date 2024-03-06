export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve(true);

    const error = false;

    if (!error) {
      reject(new Error('Error: Something went wrong'));
    }
  });
}
