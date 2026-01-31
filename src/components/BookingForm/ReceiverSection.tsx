import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";

function receiverSection() {
  return (
    <div className="">
      <FormInput label="Full Name" required={true} />
      <FormTextarea
        label={"Full Address"}
        name={""}
        value={""}
        rows={6}
        required={true}
        onChange={function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
        }}
      ></FormTextarea>
    </div>
  );
}
export default receiverSection;
