import { site } from "../lib/content";

export default function SampleTag({ item }) {
  if (!site.showSampleTags || !item || !item.sample) return null;
  return <span className="sample">Sample</span>;
}
