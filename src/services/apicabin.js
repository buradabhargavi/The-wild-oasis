import supabase from "./superbase";

export async function getCabins() {
  // const { data, error } = await supabase.from("cabins").select("*");

  let { data: cabins, error } = await supabase
    .from("cabins")
    .select("*")
    .range(0, 9);

  console.log(cabins);
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return cabins;
}
