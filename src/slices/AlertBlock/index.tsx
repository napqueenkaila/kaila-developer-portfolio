import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GoAlert } from "react-icons/go";

/**
 * Props for `AlertBlock`.
 */
export type AlertBlockProps = SliceComponentProps<Content.AlertBlockSlice>;

/**
 * Component for "AlertBlock" Slices.
 */
const AlertBlock: FC<AlertBlockProps> = ({ slice }) => {
  return (
    <div className="max-w-prose text-amber-200">
      <GoAlert className="inline-block mr-2"/>
{slice.primary.text}
    </div>
  );
};

export default AlertBlock;
