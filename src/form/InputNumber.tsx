import { Form, InputNumber, Skeleton } from 'antd';
import { CSSProperties, ComponentProps, ReactNode, forwardRef } from 'react';
import { FieldSchema } from './types';
import omit from '../utils/omit';

/**
 * Props for the InputNumber component.
 */
interface InputNumberProps {
  /** Text to display (optional). */
  text?: string;
  /** The name of the input field. */
  name: string;
  /* Schema defining the field properties. */
  schema: Record<string, FieldSchema>;
  /** Indicates whether the component is in a loading state. */
  loading?: boolean;
  /** Minimum value for the InputNumber component. */
  min?: number;
  /** Maximum value for the InputNumber component. */
  max?: number;
  /** Specifies whether the InputNumber component is disabled. */
  disabled?: boolean;
  /** Additional node to display after the InputNumber component. */
  addonAfter?: ReactNode;
  /** Placeholder text for the InputNumber component. */
  placeholder?: string;
  /** Additional styles for the InputNumber component. */
  style?: CSSProperties;
  /** Callback function that is triggered when the value changes.
   * @param args - The value of the input field.
   */
  onChange?: (args: string) => void;
}

// eslint-disable-next-line react/display-name
const Number = forwardRef(
  (
    props: InputNumberProps &
      ComponentProps<typeof Form.Item> &
      ComponentProps<typeof InputNumber>
  ): React.ReactNode => {
    const {
      name,
      schema = {},
      loading = false,
      min = 0,
      max = null,
      addonAfter,
      style = {},
      disabled = false,
      placeholder,
      onChange,
      ...formItemProps
    } = props;

    const handleChange = () => {
      if (name && onChange) {
        onChange(name);
      }
    };

    let Component = (
      <InputNumber
        {...omit(props, ['loading'])}
        style={{ width: '100%' }}
        min={min}
        max={max!}
        disabled={disabled}
        addonAfter={addonAfter}
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
    let formProps = {};

    if (name && schema[name]) {
      const fieldSchema = schema[name];
      const { label } = fieldSchema;

      Component = (
        <InputNumber
          {...omit(props, ['loading'])}
          style={style}
          disabled={disabled}
          addonAfter={addonAfter}
          type="number"
          placeholder={placeholder}
          onChange={handleChange}
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
      <Form.Item {...formProps} {...formItemProps}>
        {Component}
      </Form.Item>
    );
  }
);

export default Number;
