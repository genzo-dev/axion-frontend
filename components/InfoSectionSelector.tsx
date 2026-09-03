import Link from "next/link";
import InfoButton from "@/components/Buttons/InfoButton";

type InfoSection = {
  label: string;
  value: string;
  href: string;
};

type InfoSectionSelectorProps = {
  activeSection: string;
  sections: InfoSection[];
};

export default function InfoSectionSelector({
  activeSection,
  sections,
}: InfoSectionSelectorProps) {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-4">
      <div className="flex gap-2 border-b border-white/10 w-full">
        {sections.map((section) => (
          <Link key={section.value} href={section.href}>
            <InfoButton
              label={section.label}
              isActive={section.value === activeSection}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
