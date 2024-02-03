import { Form, Input, InputRef, Skeleton } from 'antd/lib';
import { ComponentProps, ForwardedRef, forwardRef } from 'react';
import { FieldSchema } from './types';
import { omit } from '../utils';

/**
 * Props for the InputText component.
 */
interface InputTextProps {
  /** The name of the input field. */
  name: string;
  /** Schema defining properties of the input field. */
  schema: Record<string, FieldSchema>;
  /** Whether the input field is hidden. Default is `false`. */
  hidden?: boolean;
  /** Whether the input field is disabled. Default is `false`. */
  disabled?: boolean;
  /** Whether to display a loading skeleton for the input field. Default is `false`. */
  loading?: boolean;
  /** Placeholder text for the input field. */
  placeholder: string;
  /** Size of the input field. Can be 'small', 'middle', or 'large'. */
  size?: 'small' | 'middle' | 'large';
  /** Callback function triggered on input change. */
  onChange?: () => void;
  /** Callback function triggered on input blur. */
  onBlur?: () => void;
}

/**
 * InputText component that wraps Ant Design Input with additional features.
 * It supports dynamic rendering based on a provided schema and includes loading state.
 * @param {InputTextProps} props - The component properties.
 * @returns {React.ReactNode} - The rendered component.
 */

// eslint-disable-next-line react/display-name
const InputText = forwardRef(
  (
    props: InputTextProps &
      ComponentProps<typeof Form.Item> &
      ComponentProps<typeof Input>,
    ref: ForwardedRef<InputRef>
  ): React.ReactNode => {
    const {
      name,
      schema = {},
      hidden = false,
      disabled = false,
      loading = false,
      placeholder,
      size,
      onChange,
      onBlur,
      ...formItemProps
    } = props;

    /**
     * Handles the change event for the input text.
     * Calls the `onChange` callback if both `name` and `onChange` are provided.
     */
    const handleChange = () => {
      if (name && onChange) {
        onChange();
      }
    };

    let Component = (
      <Input
        {...omit(props, ['loading'])}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        size={size}
        ref={ref}
      />
    );

    let formProps = {};

    if (name && schema[name]) {
      const fieldSchema = schema[name];
      const { label } = fieldSchema;

      Component = (
        <Input
          {...omit(props, ['loading'])}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
        />
      );
      formProps = {
        name,
        label,
        rules: fieldSchema.rules?.map(rule => ({
          ...rule,
          message: rule.message,
        })),
      };
    }

    if (loading) Component = <Skeleton.Input active block />;

    return (
      <Form.Item hidden={hidden} {...formProps} {...formItemProps}>
        {Component}
      </Form.Item>
    );
  }
);

export default InputText;
