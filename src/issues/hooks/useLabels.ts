import { getLabels } from "../actions";
import { useQuery } from "@tanstack/react-query";
import { GithubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    // refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60, // 1 hr stale time

    // Información cargada inicialmente.
    // Dura lo indicado por staleTime antes de hacer otra petición
    // initialData: [],

    // Información a mostrar mientras carga la data real
    placeholderData: [
      {
        id: 8625278332,
        node_id: "LA_kwDOAJy2Ks8AAAACAhtNfA",
        url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20Ref%20Validation",
        name: "Compiler: Ref Validation",
        color: "5319e7",
        default: false,
        description: null,
      } satisfies GithubLabel,
      {
        id: 8289232226,
        node_id: "LA_kwDOAJy2Ks8AAAAB7hOlYg",
        url: "https://api.github.com/repos/facebook/react/labels/Core%20Team%20Responded",
        name: "Core Team Responded",
        color: "0052CC",
        default: false,
        description: null,
      } satisfies GithubLabel,
    ],
  });
  return { labelsQuery };
};
