export async function LoaderFunction() {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!request.ok) throw new Error("Not found");

    const data = await request.json();

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
