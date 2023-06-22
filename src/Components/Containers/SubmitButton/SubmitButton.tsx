import { Button } from "./utils/utils";

type Props = {
  text: string;
  onClick: () => void;
};

const SubmitButton: React.FC<Props> = ({ text, onClick }) => (
  <Button type="submit" onClick={onClick}>
    {text}
  </Button>
);

export default SubmitButton;
