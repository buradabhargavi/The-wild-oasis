import supabase, { supabaseUrl } from "./superbase";

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
  console.log(newCabin);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  console.log(imageName);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  const { cabins, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.log(error);
    throw new Error("cabins could not be created");
  }
  //upload image
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", cabins.id);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
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
