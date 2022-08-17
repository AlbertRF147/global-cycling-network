const menuEntries = [
  {
    label: "Home",
    opened: false,
  },
  {
    label: "Videos",
    entries: [
      { label: "GCN Show" },
      { label: "How To" },
      { label: "Maintenance" },
      { label: "Ask GCN" },
      { label: "Training" },
      { label: "Features" },
      { label: "Top 10s" },
      { label: "GCN Racing" },
      { label: "GCN Tech" },
    ],
    opened: true,
  },
  {
    label: "Presenters",
    entries: [
      { label: "Conor Dunne" },
      { label: "Daniel Lloyd" },
      { label: "James Lowsley-Williams" },
      { label: "Jon Cannings" },
      { label: "Manon Lloyd" },
      { label: "Oliver Bridgewood" },
      { label: "Simon Richardson" },
      { label: "Tom Last" },
    ],
    opened: false,
  },
];

export default menuEntries;
