

const VDOMWorkComponent = ({ depth, content }) => {
  if (!depth || depth < 1) {
    return content;
  }

  return <VDOMWorkComponent depth={depth - 1} content={content} />;
};

export { VDOMWorkComponent };
