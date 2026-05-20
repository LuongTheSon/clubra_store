import FillerCheckbox from "./FillerCheckbox";

export default function FilltersBox() {
  const categories = [
    { id: 1, name: "Nike", value: "nike" },
    { id: 2, name: "Adidas", value: "adidas" },
    { id: 3, name: "Puma", value: "puma" },
    { id: 4, name: "Converse", value: "converse" },
    { id: 5, name: "Vans", value: "vans" },
  ];

  const types = [
    {
      name: "High Top",
      value: "hightop",
    },
    {
      name: "Low Top",
      value: "lowtop",
    },
    {
      name: "Mule",
      value: "mule",
    },
  ];
  return (
    <>
      <FillerCheckbox title="Categories" list={categories} className="mb-6" />
      <FillerCheckbox title="Types" list={types} />
    </>
  );
}
