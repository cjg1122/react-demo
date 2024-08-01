export async function send(message: string) {
  console.log("send...");
  await new Promise((res) => setTimeout(res, 3000));
  return message;
}
