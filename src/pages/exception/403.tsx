import { Button, Result } from "antd";

const Component = () => {
  return (
    <>
      <h1>{JSON.stringify(process.env.customKey)}</h1>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </>
  );
};
export default Component;
