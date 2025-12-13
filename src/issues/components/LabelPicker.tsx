import { useState } from "react";
import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const [activeLabels, setActiveLabels] = useState<string[]>([]);

  const { labelsQuery } = useLabels();
  if (labelsQuery.error) {
    return (
      <span className="flex justify-center text-red-600 items-center h-52">
        {labelsQuery.error.message}
      </span>
    );
  }
  return (
    <>
      {labelsQuery.data &&
        labelsQuery.data.map(({ color, id, name }) => (
          <span
            key={id}
            className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
            style={{ border: `1px solid #${color}`, color: `#${color}` }}
          >
            {name}
          </span>
        ))}
    </>
  );
};
