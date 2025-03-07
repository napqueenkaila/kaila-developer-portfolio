import { isFilled, DateField, Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "./Button";

export default function ContentBody({
  page,
}: {
  page: Content.ProjectsDocument;
}) {
  const formatDate = (date: DateField) => {
    if (isFilled.date(date)) {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(date),
      );
    }
  };

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <div className="flex justify-between items-center">
        <Heading as="h1">{page.data.title}</Heading>
          {page.data.project_link && (
            <Button label="Go to Project" linkField={page.data.project_link} className="h-12"/>
        )}
        </div>
        <div className="flex gap-4 text-xl font-bold text-[#07ffff]">
          {page.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formatDate(page.data.project_date)}
        </p>
        <div className="prose prose-lg prose-invert mt-12  max-w-none w-full  md:mt-16">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
