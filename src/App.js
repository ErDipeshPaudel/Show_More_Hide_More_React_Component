import { useState } from "react";

export default function App() {
  return <Content />;
}

function Content() {
  const showContainer = {
    margin: 0,
    display: "flex",
    alignItem: "center",
  };
  return (
    <h3>
      <ReadMore>
        This is paragraph to show read more and read less option! Here are some
        more words to hide and show to make the frontend look good! Because all
        the text displayed takes more area!
      </ReadMore>
    </h3>
  );
}

function ReadMore({ children }) {
  const [isReadMore, setIsReadMore] = useState(true);

  const reads = children;

  const showMoreStyle = {
    color: "blue",
    cursor: " pointer",
  };

  const onToggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div>
      {isReadMore ? reads.slice(0, 90) : reads}
      <span style={showMoreStyle} onClick={onToggleReadMore}>
        {isReadMore ? "...show more!" : "...show less!"}
      </span>
    </div>
  );
}
