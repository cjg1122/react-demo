"use server";
export async function increment(previousState: number, formData: FormData) {
  console.log(previousState, formData.get("name"), formData.get("gender"));
  return previousState + 1;
}
