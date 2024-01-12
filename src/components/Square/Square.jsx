import Button from "./Button";

const Square = ({ value, setValue }) => {
  return (
    <>
      <div className="flex">
        <Button value={value[0]} />
        <Button value={value[1]} />
        <Button value={value[2]} />
      </div>
      <div className="flex">
        <Button value={value[3]} />
        <Button value={value[4]} />
        <Button value={value[5]} />
      </div>
      <div className="flex">
        <Button value={value[6]} />
        <Button value={value[7]} />
        <Button value={value[8]} />
      </div>
    </>
  );
};

export default Square;