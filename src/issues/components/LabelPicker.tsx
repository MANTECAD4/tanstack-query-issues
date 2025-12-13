import { FC } from "react";
import { useLabels } from "../hooks/useLabels";
import { IoMdCloseCircleOutline } from "react-icons/io";

type Props = {
  onLabelsFilterChange: (label: string) => void;
  selectedLabels: string[];
};
export const LabelPicker: FC<Props> = ({
  onLabelsFilterChange,
  selectedLabels,
}) => {
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
            onClick={() => onLabelsFilterChange(name)}
            key={id}
            className={`flex items-center gap-x-1  animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-700 cursor-pointer ${
              selectedLabels.includes(name)
                ? "bg-slate-600 shadow-sm shadow-white transition-all"
                : ""
            }`}
            style={{ border: `1px solid #${color}` }}
          >
            {name}
            {selectedLabels.includes(name) && (
              <IoMdCloseCircleOutline size={20} />
            )}
          </span>
        ))}
    </>
  );
};
