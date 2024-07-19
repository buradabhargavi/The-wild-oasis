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

export async function createCabin(newCabin) {
  const { cabins, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();
  if (error) {
    console.log(error);
    throw new Error("cabins could not be created");
  }
  return cabins;
}

export async function deleteCabin(id) {
  const { cabins, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }
  return cabins;
}
