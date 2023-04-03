
import { Button, Name } from './style';

class ButtonClass {
    constructor(name, options = {}) {
      this.name = name;
      this.onClick = options.onClick || null;
      this.type = options.type || 'button';
    }
}

const ButtonComponent = ({
  className,
  name,
  onClick,
  type,
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      type={type}>
        <div className='flex items-center'>
        </div>
       <Name>{name}</Name>
    </Button>
  );
};

export { ButtonComponent };
