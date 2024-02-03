import { Form, Input, InputRef } from 'antd/lib';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { FieldSchema } from './types';

/**
 * Props for the InputPassword component.
 */
interface InputPasswordProps {
  /** The name of the input field. */
  name: string;
  /** Schema containing field configurations. */
  schema: Record<string, FieldSchema>;
  /** Placeholder text for the password input. */
  placeholder: string;
  /** Additional CSS styles for the password input. */
  style?: React.CSSProperties;
  /** Size of the password input: 'small', 'middle', or 'large'. */
  size?: 'small' | 'middle' | 'large';
  /** Callback function triggered on input change. */
  onChange?: () => void;
}

/**
 * InputPassword component is a wrapper around Ant Design's Input.Password with additional features.
 * It is used within a Form.Item and supports various configuration options.
 * @param {InputPasswordProps} props - The component properties.
 * @returns {React.ReactNode} - The rendered component.
 */

// eslint-disable-next-line react/display-name
const InputPassword = forwardRef(
  (
    props: InputPasswordProps &
      ComponentProps<typeof Form.Item> &
      ComponentProps<typeof Input>,
    ref: ForwardedRef<InputRef>
  ): React.ReactNode => {
    const {
      name,
      schema = {},
      placeholder,
      style = {},
      size = 'small',
      onChange,
      ...formItemProps
    } = props;

    /**
     * Handles the change event for the password input.
     * Calls the onChange callback if both the name and onChange props are provided.
     */
    const handleChange = () => {
      if (name && onChange) {
        onChange();
      }
    };

    const fieldSchema = schema[name];
    const { label } = fieldSchema;

    return (
      <Form.Item
        name={name}
        label={label}
        rules={fieldSchema?.rules?.map(rule => ({
          ...rule,
          message: rule.message,
        }))}
        {...formItemProps}
      >
        <Input.Password
          ref={ref}
          placeholder={placeholder}
          size={size}
          style={style}
          onChange={handleChange}
        />
      </Form.Item>
    );
  }
);

export default InputPassword;
