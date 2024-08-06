"use server";
export async function submitForm(formData: FormData) {
  const res = await new Promise<string>((res) =>
    setTimeout(res, 2000, formData.get("username"))
  );
  console.log(res);
  return res;
}
