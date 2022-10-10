function ItemDescription({ description, className }) {
  return (
    <span className={className}>
      {description}
      {console.log(className)}
    </span>
  );
}

export default ItemDescription;
