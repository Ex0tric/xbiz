import {
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Switch,
  Radio,
  InputNumber,
  TimePicker,
  Checkbox,
  Upload,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const DynamicForm = ({ fields }) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  const handleFormSubmit = (values) => {
    console.log("Form Data:", values);
    api.info({
      message: `Form Data`,
      description: (
        JSON.stringify(values)
      ),
      placement: "topRight",
    }); 
    form.resetFields()
  };

  const renderFormItem = (field) => {
    const {
      field_id,
      field_name,
      control_type,
      required,
      DropdownValues,
      maxlength,
    } = field;
    const rules =
      required === "1"
        ? [{ required: true, message: `${field_name} is required` }]
        : [];

    switch (control_type) {
      case "TEXT_INPUT":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <Input maxLength={maxlength} placeholder={field_name} />
          </Form.Item>
        );
      case "TEXTAREA":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <TextArea maxLength={maxlength} placeholder={field_name} />
          </Form.Item>
        );
      case "NUMBER":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <InputNumber style={{ width: "100%" }} placeholder={field_name} />
          </Form.Item>
        );
      case "DATE_PICKER":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <DatePicker style={{ width: "100%" }} placeholder={field_name} />
          </Form.Item>
        );
      case "DATE_TIME_PICKER":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <DatePicker
              showTime
              style={{ width: "100%" }}
              placeholder={field_name}
            />
          </Form.Item>
        );
      case "TIME_PICKER":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <TimePicker style={{ width: "100%" }} placeholder={field_name} />
          </Form.Item>
        );
      case "SELECT":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <Select placeholder={field_name}>
              {JSON.parse(DropdownValues || "[]").map((option) => (
                <Select.Option key={option.Key} value={option.Value}>
                  {option.Value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );
      case "MULTIPLE_SELECT":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <Select mode="multiple" placeholder={field_name}>
              {JSON.parse(DropdownValues || "[]").map((option) => (
                <Select.Option key={option.Key} value={option.Value}>
                  {option.Value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        );
      case "RADIO":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} rules={rules}>
            <Radio.Group>
              {JSON.parse(DropdownValues || "[]").map((option) => (
                <Radio key={option.Key} value={option.Value}>
                  {option.Value}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        );
      case "SWITCH":
        return (
          <Form.Item key={field_id} name={field_id} label={field_name} valuePropName="checked">
            <Switch />
          </Form.Item>
        );
      case "CHECKBOX":
        return (
          <Form.Item key={field_id} name={field_id} valuePropName="checked">
            <Checkbox>{field_name}</Checkbox>
          </Form.Item>
        );
      case "FILE":
        return (
          <Form.Item key={field_id}
            name={field_id}
            label={field_name}
            valuePropName="fileList"
          >
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
        );
      case "AUTOCOMPLETE_WITH_CHIPS":
        return (
          <Form.Item name={field_id} label={field_name} rules={rules} key={field_id}>
            <Select
              mode="tags"
              style={{ width: "100%" }}
              placeholder={`Enter or select ${field_name}`}
              options={JSON.parse(DropdownValues || "[]").map((option) => ({
                label: option.Value,
                value: option.Value,
              }))}
            />
          </Form.Item>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
        <div style={{ marginBottom: 10 }}>
          {fields.map((field) => renderFormItem(field))}
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default DynamicForm;
