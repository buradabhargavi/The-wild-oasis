import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      alert("successfully updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => alert(err.message),
  });

  return { isUpdating, updateSetting };
}
