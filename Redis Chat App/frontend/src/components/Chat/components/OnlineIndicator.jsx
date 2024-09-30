const OnlineIndicator = ({ online, hide = false, width = 8, height = 8 }) => {
  return (
    <div
      className={
        online ? "rounded-circle bg-success" : "rounded-circle bg-gray"
      }
      style={{ 
        width: online ? width : 0, 
        height: online ? height : 0, 
        opacity: hide ? 0 : 1,
        marginRight: online ? "5px" : 0 
      }}
    ></div>
  );
};

export default OnlineIndicator;
