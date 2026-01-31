import FormInput from "../common/FormInput";

function senderSection() {
  return (
    <div className="">
      <FormInput label="Full Name" required={true} />
      <FormInput label="Mobile Number" required={true} />
      <FormInput label="Email" required={true} />
    </div>
  );
}
export default senderSection;
