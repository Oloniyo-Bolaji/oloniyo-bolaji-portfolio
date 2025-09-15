const Heading = ({ heading }) => {

    
  return (
    <div className="flex flex-col items-center my-1">
      <h3 className="headings my-2 text-[#E6EDF3] uppercase font-extrabold text-lg">{heading}</h3>
      <div className="h-0.5 w-8 rounded bg-[#E6EDF3]" aria-hidden="true" />
    </div>
  );
};

export default Heading;
